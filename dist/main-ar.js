    // slider 
    const imageSliderProjects={
      'voting':{
        'index':0,
        'images':['voting1.jpg','voting2.jpg','voting3.jpg','voting4.jpg','voting5.jpg']
        },
        'BspSchool':{
        'index':0,
        'images':['School1.jpg','School2.jpg','School3.jpg','School4.jpg','School5.jpg']
      },
      'BspNotes':{
        'index':0,
        'images':['bspNote1.jpg','bspNote2.jpg','bspNote3.jpg','bspNote4.jpg']
      },
      'shopping':{
        'index':0,
        'images':['shopping1.jpg','shopping2.jpg','shopping3.jpg','shopping4.jpg','shopping5.jpg']
      },
      'goatCoin':{
        'index':0,
        'images':['goatCoin1.jpg','goatCoin2.jpg','goatCoin3.jpg','goatCoin4.jpg']
      }
    };
    const movSlide=(indexProject,state)=>{
     switch(indexProject){
      
      // project votig
      case 1:
         let votingSlider=document.getElementById('votingSlider');
         const totalslidesV=imageSliderProjects.voting.images.length;
         if(state==='next'  ){
          imageSliderProjects.voting.index ++;
         }else{
          imageSliderProjects.voting.index --;
         }
         
         if(imageSliderProjects.voting.index === totalslidesV){imageSliderProjects.voting.index=0};
         if(imageSliderProjects.voting.index === -1){imageSliderProjects.voting.index= totalslidesV -1};
       
       
         if(imageSliderProjects.voting.index>=totalslidesV){
           imageSliderProjects.voting.index =0;
         }else if(imageSliderProjects.voting.index < 0 ){
          imageSliderProjects.voting.index=totalslidesV -1;
         }else{
          imageSliderProjects.voting.index=imageSliderProjects.voting.index;
         }
         votingSlider.setAttribute('src','../images/project/'+imageSliderProjects.voting.images[imageSliderProjects.voting.index]);
        break;

     // project BSP School
      case 2:
         let schoolSlider =document.getElementById('schoolSlider');
         const totalslidesBSPSchool =imageSliderProjects.BspSchool.images.length;
         if(state==='next'  ){
          imageSliderProjects.BspSchool.index ++;
         }else{
          imageSliderProjects.BspSchool.index --;
         }
         
         if(imageSliderProjects.BspSchool.index === totalslidesBSPSchool){imageSliderProjects.BspSchool.index=0};
         if(imageSliderProjects.BspSchool.index === -1){imageSliderProjects.BspSchool.index= totalslidesBSPSchool -1};
       
        
         if(imageSliderProjects.BspSchool.index>=totalslidesBSPSchool){
           imageSliderProjects.BspSchool.index =0;
         }else if(imageSliderProjects.BspSchool.index < 0 ){
          imageSliderProjects.BspSchool.index=totalslidesBSPSchool -1;
         }else{
          imageSliderProjects.BspSchool.index=imageSliderProjects.BspSchool.index;
         }
         schoolSlider.setAttribute('src','../images/project/'+imageSliderProjects.BspSchool.images[imageSliderProjects.BspSchool.index]);
        break;

       // project notesSlider 
      case 3:
      let notesSlider=document.getElementById('notesSlider');
         const totalslidesN =imageSliderProjects.BspNotes.images.length;
         if(state==='next'  ){
          imageSliderProjects.BspNotes.index ++;
         }else{
          imageSliderProjects.BspNotes.index --;
         }
         
         if(imageSliderProjects.BspNotes.index === totalslidesN){imageSliderProjects.BspNotes.index=0};
         if(imageSliderProjects.BspNotes.index === -1){imageSliderProjects.BspNotes.index= totalslidesN -1};
       
        
         if(imageSliderProjects.BspNotes.index>=totalslidesN){
           imageSliderProjects.BspNotes.index =0;
         }else if(imageSliderProjects.BspNotes.index < 0 ){
          imageSliderProjects.BspNotes.index=totalslidesN -1;
         }else{
          imageSliderProjects.BspNotes.index=imageSliderProjects.BspNotes.index;
         }
         notesSlider.setAttribute('src','../images/project/'+imageSliderProjects.BspNotes.images[imageSliderProjects.BspNotes.index]);

       break;

        // project shoppingSlider 
      case 4:
         let shoppingSlider = document.getElementById('shoppingSlider');
         const totalslideShopping = imageSliderProjects.shopping.images.length;
         if(state==='next'  ){
          imageSliderProjects.shopping.index ++;
         }else{
          imageSliderProjects.shopping.index --;
         }
         
         //console.log('index image frist', imageSliderProjects.voting.index);
         if(imageSliderProjects.shopping.index === totalslideShopping){imageSliderProjects.shopping.index=0};
         if(imageSliderProjects.shopping.index === -1){imageSliderProjects.shopping.index= totalslideShopping -1};
       
       
         if(imageSliderProjects.shopping.index >= totalslideShopping){
           imageSliderProjects.shopping.index = 0;
         }else if(imageSliderProjects.shopping.index < 0 ){
          imageSliderProjects.shopping.index = totalslideShopping -1;
         }else{
          imageSliderProjects.shopping.index=imageSliderProjects.shopping.index;
         }
         shoppingSlider.setAttribute('src','../images/project/'+imageSliderProjects.shopping.images[imageSliderProjects.shopping.index]);

       break;

       // project goatCoinSlider 
      case 5:
         let goatCoinSlider = document.getElementById('goatCoinSlider');
         const totalslideGoatCoin = imageSliderProjects.goatCoin.images.length;
         if(state==='next'  ){
          imageSliderProjects.goatCoin.index ++;
         }else{
          imageSliderProjects.goatCoin.index --;
         }
         
         //console.log('index image frist', imageSliderProjects.voting.index);
         if(imageSliderProjects.goatCoin.index === totalslideGoatCoin){imageSliderProjects.goatCoin.index=0};
         if(imageSliderProjects.goatCoin.index === -1){imageSliderProjects.goatCoin.index= totalslideGoatCoin -1};
       
       
         if(imageSliderProjects.goatCoin.index >= totalslideGoatCoin){
           imageSliderProjects.goatCoin.index = 0;
         }else if(imageSliderProjects.goatCoin.index < 0 ){
          imageSliderProjects.goatCoin.index = totalslideGoatCoin -1;
         }else{
          imageSliderProjects.goatCoin.index=imageSliderProjects.goatCoin.index;
         }
         goatCoinSlider.setAttribute('src','../images/project/'+imageSliderProjects.goatCoin.images[imageSliderProjects.goatCoin.index]);

       break;

     }
    };