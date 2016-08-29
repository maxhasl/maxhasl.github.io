#!/bin/bash -e
BASE_PATH='/opt/local/var/www/wp'
DEFAULT_EMAIL='oleg.kudrenko@gmail.com'
cd ${BASE_PATH}
clear
echo "============================================"
echo "WordPress Install Script"
echo "============================================"
echo "Please enter sitename:"
read -e sitename
if [ -e "${sitename}" ] ; then
    echo "Site with name ${sitename} already exist"
    kill -INT $$
fi
echo "============================================"
db_name=${sitename}
db_user=${db_name}
db_pass='qweasd123'
admin_user=${db_name}
admin_password=${db_pass}
admin_email=${DEFAULT_EMAIL}
echo "Database Name: ${db_name}"
echo "Database User: ${db_user}"
echo "Database Password: ${db_pass}"
echo "Admin User: ${admin_user}"
echo "Admin Password: ${admin_password}"
echo "Admin Email: ${admin_email}"
echo "Site URL: wp-${sitename}.loc"
echo "============================================"
echo "run install? (y/n)"
read -e run
if [ "$run" == n ] ; then
    echo "Bye-bye!"
    kill -INT $$
fi
echo "============================================"
echo "A robot is now installing WordPress for you."
echo "============================================"

if [ -e "${BASE_PATH}/tmp/latest.tar.gz" ]
then
    cd tmp
    rm -rf wordpress
else
    rm -rf tmp
    mkdir tmp
    cd tmp
    #download wordpress
    curl -O https://wordpress.org/latest.tar.gz
fi
#unzip wordpress
echo "Unzip wordpress and move to new site folder: ${sitename}"
tar -zxf latest.tar.gz
mv wordpress ../${sitename}
cd ../${sitename}

#############################################################################################################
echo "Create and fill wp-config..."
cp wp-config-sample.php wp-config.php
#set database details with perl find and replace
perl -pi -e "s/database_name_here/$db_name/g" wp-config.php
perl -pi -e "s/username_here/$db_user/g" wp-config.php
perl -pi -e "s/password_here/$db_pass/g" wp-config.php
perl -pi -e "s/localhost/127.0.0.1/g" wp-config.php

#set WP salts
perl -i -pe'
  BEGIN {
    @chars = ("a" .. "z", "A" .. "Z", 0 .. 9);
    push @chars, split //, "!@#$%^&*()-_ []{}<>~\`+=,.;:/?|";
    sub salt { join "", map $chars[ rand @chars ], 1 .. 64 }
  }
  s/put your unique phrase here/salt()/ge
' wp-config.php

#create uploads folder and set permissions
mkdir wp-content/uploads
chmod 775 wp-content/uploads
#echo "Cleaning..."

#############################################################################################################
echo "Create database..."
mysql -u root -pqweasd123 -e "CREATE USER '${db_user}'@'127.0.0.1' IDENTIFIED BY '${db_pass}'"
mysql -u root -pqweasd123 -e "create database ${db_name}; GRANT ALL PRIVILEGES ON ${db_name}.* TO ${db_user}@127.0.0.1 IDENTIFIED BY '${db_pass}'"

sudo sh -c "echo 127.0.0.1	wp-${sitename}.loc >> /etc/hosts"

#############################################################################################################
echo "Installing..."
wp core install --url=wp-${sitename}.loc --title=${sitename} --admin_user=${admin_user} --admin_password=${admin_password} --admin_email=${admin_email}

echo "========================="
echo "Installation is complete."
echo "========================="