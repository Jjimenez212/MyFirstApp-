app.controller('MainController', ['$scope', function($scope) { 
    $scope.title = 'This Month\'s Bestsellers'; 
    $scope.promo = 'The most popular books this month.';
    $scope.products = [
        { 
          name: 'The Book of Trees', 
          price: 19, 
          pubdate: new Date('2014', '03', '08'), 
          cover: 'https://images-na.ssl-images-amazon.com/images/I/61EQH6%2BCpuL._SX258_BO1,204,203,200_.jpg',
          likes: 0,
        dislikes: 0,
        
        }, 
        { 
          name: 'Program or be Programmed', 
          price: 8, 
          pubdate: new Date('2013', '08', '01'), 
          cover: 'http://s.s-bol.com/imgbase0/imagebase/large/FC/0/1/7/7/9200000018297710.jpg',
          likes: 0,
        dislikes: 0
        }, 
        { 
          name: 'Harry Potter & The Prisoner of Azkaban', 
          price: 11.99, 
          pubdate: new Date('1999', '07', '08'), 
          cover: 'https://upload.wikimedia.org/wikipedia/sco/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg',
          likes: 0,
        dislikes: 0
        }, 
        { 
          name: 'Ready Player One', 
          price: 7.99, 
          pubdate: new Date('2011', '08', '16'), 
          cover: 'http://upload.wikimedia.org/wikipedia/en/a/a4/Ready_Player_One_cover.jpg',
          likes: 0,
        dislikes: 0
        },
        {
          name: 'The Divine Comedy',
          price: 11.99,
          pubdate: new Date('2016', '01', '08'),
          cover: 'https://images.booksense.com/images/786/446/9781596446786.jpg',
          likes: 0,
          dislikes: 0
        },
        {
          name: 'The Communist Manifesto',
          price: 11.99,
          pubdate: new Date('1847', '02', '21'),
          cover: 'https://booksrun.com/image-loader/350/https:__m.media-amazon.com_images_I_51aEt3i6vdL.jpg',
          likes: 0,
          dislikes: 0
        },
      ];
        
    $scope.plusOne = function(index) { 
        $scope.products[index].likes += 1;  
      };
      $scope.minusOne = function(index) {
        $scope.products[index].dislikes += 1;
      };
  }]);
  