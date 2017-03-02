//arrays for static save images (key+url)
var images = [];
var myImages = [];
//component for images uploaded after search
var SearchItems = React.createClass({
    //method for add image to custom gallery
    handleAdd: function(e) {
        this.props.addImage(e.target.attributes.src.nodeValue);
    },
    render: function () {
        return <li className="search__list__item" onClick={this.handleAdd}>
                    <img src={this.props.path} className="search__list__item__image"/>
               </li>
    }
});
//component for added images to custom gallery
var MyImage = React.createClass({
    //method for display image in carousel
    activePhoto: function (e) {
        if(e.target.attributes.src.nodeValue == 'img/delete.png') return;
        this.props.activePhoto(e.target.attributes.src.nodeValue);
    },
    //delete image from custom gallery
    deleteImage: function (e){
        this.props.deleteImage(e.target.parentElement.children[0].src);
    },
    render: function () {
        return <li className="my-gallery__list__item" onClick={this.activePhoto}>
        <img className="my-gallery__list__item__image" src={this.props.path} alt="" />
            <img className="my-gallery__list__item__delete" src="img/delete.png" onClick={this.deleteImage}/>
        </li>
    }
});
//main component in app
var Gallery = React.createClass({
    getInitialState: function () {
        return{
            displayImages: [],
            myImages: [],
            galleryImage: '',
            activeGallery: 0,
            activeCarousel: 0,
            imageAlreadyAdded: 0
        }
    },
    //method for search 20 images by tag from input
    handleSearch: function () {
        var localThis = this;
        var queryTag = document.getElementsByClassName('search__input')[0].value.toLowerCase();
        var queryApi= 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b54580f369a7eeebecb2004dc429d08f&tags='+queryTag+'&page=1&per_page=20&format=json&nojsoncallback=1';
        $.ajax({
            type: 'GET',
            url: queryApi,
            dataType: 'json',
            cache: false,
            success: function(data){
                var photoArray = data.photos.photo;
                var searchImages = [];
                photoArray.map(function (item, index) {
                    searchImages.push(
                        {
                            id: index,
                            url: 'https://farm'+item.farm+'.staticflickr.com/'+item.server+'/'+item.id+'_'+item.secret+'.jpg'
                        });
                });
                images = searchImages;
                localThis.setState({
                    displayImages: images
                })

            }
        });
    },
    //use Masonry for displaed images
    componentDidUpdate: function (prevProps) {
        var searchList = this.refs.searchList;
        var msnry = new Masonry( searchList, {
            itemSelector: '.search__list__item',
            gutter: 10
        });
        setTimeout(function () {
            msnry.reloadItems();
            msnry.layout();
        }, 2000);

        var myGalleryList = this.refs.myGalleryList;
        var myGalleryMsnry = new Masonry(myGalleryList, {
            itemSelector: '.my-gallery__list__item',
            gutter: 10
        })


    },
    //add image to custom gallery
    updateGallery: function (e) {
        var count = 0;
        myImages.filter(function (item) {
            if(e == item.url) count++;
        });
        if(count == 0){
            var myImagesCount = myImages.length;
            myImages.push({
                id: myImagesCount,
                url: e
            });
            this.setState({
                myImages: myImages,
                activeGallery: 1,
                imageAlreadyAdded: 0
            })
        } else {
            this.setState({
                imageAlreadyAdded: 1
            });
        }
    },
    //display image in carousel
    activePhoto: function (e) {
        var activeUrl = e;
        var activeId;
        myImages.filter(function (e) {
            if(e.url == activeUrl) activeId =  e.id;
        });
        this.setState({
            galleryImage: activeUrl,
            activeCarousel: 1
        })
    },
    //functional for link 'prev' in carousel
    prevImage: function () {
        var activeImageUrl = this.state.galleryImage;
        var activeId;
        var prevImageUrl;
        myImages.filter(function (e) {
            if(e.url == activeImageUrl) {
                activeId =  e.id;
            }
        });
        myImages.filter(function (e) {
            if(e.id == activeId - 1 ) prevImageUrl = e.url;
        });
        if(prevImageUrl != undefined) {
            this.setState({
                galleryImage: prevImageUrl
            })
        }
    },
    //functional for link 'next' in carousel
    nextImage: function () {
        var activeImageUrl = this.state.galleryImage;
        var activeId;
        var nextImageUrl;
        myImages.filter(function (e) {
            if(e.url == activeImageUrl) {
                activeId =  e.id;
            }
        });
        myImages.filter(function (e) {
            if(e.id == activeId + 1 ) nextImageUrl = e.url;
        });
        if(nextImageUrl != undefined) {
            this.setState({
                galleryImage: nextImageUrl
            })
        }

    },
    //delete image from custom gallery
    deleteImage: function (e) {
        var imageUrl = e;
        if(this.state.galleryImage == imageUrl) {
            var activeId;
            var prevImageUrl;
            myImages.map(function (e) {
                if(e.url == imageUrl) {
                    activeId =  e.id;
                }
            });
            myImages.map(function (e) {
                if(e.id == activeId - 1 ) prevImageUrl = e.url;
            });
            if(prevImageUrl != undefined) {
                this.setState({
                    galleryImage: prevImageUrl
                })
            }
        }
        var newMyImages = myImages.filter(function(item){
            return imageUrl !=  item.url;
        });
        newMyImages.map(function (item) {
            if (item.id > activeId) item.id--;
        });

        myImages = newMyImages;
        this.setState({
            myImages: myImages
        })
    },
    render: function () {
        var localThis = this;
        var myGalleryClass;
        var carouselClass;
        var errorClass;
        if(this.state.imageAlreadyAdded == 0) {
            errorClass = 'error';
        } else {
            errorClass = 'error error--active';
        }
        if(this.state.activeGallery == 0) {
            myGalleryClass = 'my-gallery';
        } else {
            myGalleryClass = 'my-gallery my-gallery--visible';
        }
        if(this.state.activeCarousel == 0) {
            carouselClass = 'carousel';
        } else {
            carouselClass = 'carousel--visible';
        }
        return <main className="clearfix">
            <section className="search">
            <input type="text" className="search__input" />
            <button className="search__submit" onClick={this.handleSearch}>SEARCH</button>
        <span className={errorClass}>This image already added!</span>
        </section>
        <ul className="search__list" ref="searchList">
            {
                this.state.displayImages.map(function(el) {
                return <SearchItems
                key={el.id}
                path={el.url}
                addImage={localThis.updateGallery}
                />;
            })
    }
        </ul>
        <section className={myGalleryClass}>
            <h1 className="my-gallery__title">Your gallery</h1>
        <ul className="my-gallery__list" ref="myGalleryList">
            {
                this.state.myImages.map(function (el) {
                return <MyImage
                key={el.id}
                path={el.url}
                activePhoto={localThis.activePhoto}
                deleteImage={localThis.deleteImage}/>
            })
    }
        </ul>
        </section>
        <section className={carouselClass}>
            <img src="img/arrow.png" className="carousel__arrow carousel__arrow--left" onClick={this.prevImage}></img>
        <img className="carousel__image" src={this.state.galleryImage} alt=""/>
            <img src="img/arrow.png" className="carousel__arrow carousel__arrow" onClick={this.nextImage}></img>
        </section>
        </main>
    }
});

ReactDOM.render(
<Gallery />,
    document.getElementById('react-container')
);