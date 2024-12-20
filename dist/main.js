   const menubtn=document.getElementById('menubtn');
    const menuNav=document.getElementById('navMenu');
    menubtn.addEventListener('click',function(){
      menuNav.classList.toggle('hidden');
    })


    // slider 
    const imageSliderProjects={
      'voting':{
        'index':0,
        'images':['voting1.jpg','voting2.jpg','voting3.jpg','voting4.jpg','voting5.jpg']
        },
      'profile':{
        'index':0,
        'images':['profile1.jpg','profile2.jpg','profile3.jpg']
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
         
         //console.log('index image frist', imageSliderProjects.voting.index);
         if(imageSliderProjects.voting.index === totalslidesV){imageSliderProjects.voting.index=0};
         if(imageSliderProjects.voting.index === -1){imageSliderProjects.voting.index= totalslidesV -1};
       
        //  let indexV=imageSliderProjects.voting.index;
        //  console.log('index :'+ index, ' index image :'+imageSliderProjects.voting.index);
        //  console.log('total',totalslides);
         if(imageSliderProjects.voting.index>=totalslidesV){
           imageSliderProjects.voting.index =0;
         }else if(imageSliderProjects.voting.index < 0 ){
          imageSliderProjects.voting.index=totalslidesV -1;
         }else{
          imageSliderProjects.voting.index=imageSliderProjects.voting.index;
         }
         votingSlider.setAttribute('src','images/project/'+imageSliderProjects.voting.images[imageSliderProjects.voting.index]);
        break;


       // project profile 
      case 2:
      let profileSlider=document.getElementById('profileSlider');
         const totalslidesP=imageSliderProjects.profile.images.length;
         if(state==='next'  ){
          imageSliderProjects.profile.index ++;
         }else{
          imageSliderProjects.profile.index --;
         }
         
         //console.log('index image frist', imageSliderProjects.voting.index);
         if(imageSliderProjects.profile.index === totalslidesP){imageSliderProjects.profile.index=0};
         if(imageSliderProjects.profile.index === -1){imageSliderProjects.profile.index= totalslidesP -1};
       
        //  let indexP=imageSliderProjects.profile.index;
        //  console.log('index :'+ index, ' index image :'+imageSliderProjects.voting.index);
        //  console.log('total',totalslides);
         if(imageSliderProjects.profile.index>=totalslidesP){
           imageSliderProjects.voting.index =0;
         }else if(imageSliderProjects.profile.index < 0 ){
          imageSliderProjects.voting.index=totalslidesP -1;
         }else{
          imageSliderProjects.voting.index=imageSliderProjects.profile.index;
         }
         profileSlider.setAttribute('src','images/project/'+imageSliderProjects.profile.images[imageSliderProjects.profile.index]);

       break;
     }
    };