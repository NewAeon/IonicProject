
angular.module('starter.controllers',[])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$window,$ionicNavBarDelegate,$state) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.show();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  $scope.logout=function(){
   $state.go('app.login2');

  }
})





.controller('AddCandidateCtrl',['$scope','Web3jsObj','$ionicLoading','$timeout',function($scope,Web3jsObj,$ionicLoading,$timeout){



const judgment_address = localStorage.getItem("address");
const judgment_privateKey = localStorage.getItem("pkAddress");






 web3.eth.getTransactionCount("0x63a9adabb3edc39f552249cc0dc23eeab0df3c72",function(err,nonce){

             var tx =new ethereumjs.Tx({ 
            data : '',
            nonce : nonce,
            gasPrice :web3.toHex(web3.toWei('20', 'gwei')),
            to : judgment_address,
            value : 6000000000000000000,
            gasLimit: 1000000
            

        });

          tx.sign(ethereumjs.Buffer.Buffer.from("50FBEE34A355F70931B95C5C114AED5FB21BAF14971C1CDCC067BA46024C7275", 'hex'));
          var raw = '0x' + tx.serialize().toString('hex');


          web3.eth.sendRawTransaction(raw, function (err, transactionHash) {
    
          











  



    
 
    
Web3jsObj.web3Init(contractsInfo.main,MainAbi,"0x63a9adabb3edc39f552249cc0dc23eeab0df3c72","50FBEE34A355F70931B95C5C114AED5FB21BAF14971C1CDCC067BA46024C7275");
Web3jsObj.Web3Facotry(rinkebyUrl);

const smartContract = Web3jsObj.Web3SmartContract();



    $scope.addCandidate=function(candidateData){

  $ionicLoading.show();
        // create candidate wallet

        Web3jsObj.createBrainWallet(candidateData.candidateId,candidateData.password).then(function(_wallet)
    
    {


               ///// add candidate function

               var data =smartContract.addCandidate.getData(_wallet.address,candidateData.candidateId,candidateData.name,candidateData.dateOfBirth,candidateData.password
                ,candidateData.city,candidateData.year,candidateData.phoneNumber,"plz plz endome elena drobs mlabs swf n7rr el ods"); 
            
            
                web3.eth.getTransactionCount(judgment_address,function(err,nonce){
                  
                    var tx =new ethereumjs.Tx({ 
                        data : data,
                        nonce : nonce,
                        gasPrice :web3.toHex(web3.toWei('20', 'gwei')),
                        to : contractsInfo.main,
                        value : 0,
                        gasLimit: 1000000
                        
            
                    });
            
                      tx.sign(ethereumjs.Buffer.Buffer.from(judgment_privateKey.substr(2), 'hex'));
                      var raw = '0x' + tx.serialize().toString('hex');
            
            
                      web3.eth.sendRawTransaction(raw, function (err, transactionHash) {

if(!err)
{
    $ionicLoading.hide();
    console.log(transactionHash);
    alert("candidate added");
}


                      });


                    



                });





            })
      
        }

        })


    })
    
    
    








    


     
    
    
       
        




        ///////////////////

  



  }])


.controller('login2Ctrl',["$scope","Web3jsObj",'$window','$state','Web3jsObj','$ionicLoading' ,function($scope,Web3jsObj,$window,$state,Web3jsObj,$ionicLoading) {


  $scope.check = function(event,_val){
    if ($scope.checked == event.target.value)
     $scope.checked = false;
     $scope.role=_val;
  }  
   
  $scope.loginEmail = function(loginForm,user,role){


$scope.validation = function(_idNumber,_pass){






}


// (role.candidate ==true && valdation(user.NationalNumber,user.password))


// if(($scope.role=="candidate" && validation(user.NationalNumber,user.password)==true))
// {

// }
 if(($scope.role=="judgment" && user.password =="judgjudg") )
{

    $ionicLoading.show();

    
    Web3jsObj.createBrainWallet(user.NationalNumber, user.password).then(function(_wallet){

            
        localStorage.setItem("address", _wallet.address);
        localStorage.setItem("pkAddress",_wallet.privateKey);



    
            $state.go('app.addCandidate');

            $ionicLoading.hide();

            
        });
     
     // console.log(Web3jsObj.Web3Facotry("https://rinkeby.infura.io/v3/afbac1a223484d84a7784a133d1f2010"));
    //   var webobj=Web3jsObj.Web3Facotry("https://rinkeby.infura.io/v3/afbac1a223484d84a7784a133d1f2010");
    }
  
  }





    

}])

.controller('ViewCandidateCtrl',function($scope,Web3jsObj){

//     Web3jsObj.web3Init(dsdsd,adsadsd);
//     Web3jsObj.Web3Facotry();
//   var s =  Web3jsObj.Web3SmartContract();



    
    
  
    

});


