const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});




var circle =  document.querySelector('#main #home #nav #nav2 .t1 .cir')
var arr = [
   {pto:"https://images.unsplash.com/photo-1584284621485-c955b915f5cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80"},
   {pto:"https://images.unsplash.com/photo-1501250523374-8f78abda6b86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80"},
   {pto:"https://images.unsplash.com/photo-1579167728798-a1cf3d595960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80"},
   {pto:"https://images.unsplash.com/photo-1584283626572-b768ba958d00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1482&q=80"},
   {pto:"https://images.unsplash.com/photo-1575995872537-3793d29d972c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80"},
   {pto:"https://images.unsplash.com/photo-1584280662559-28e6952c1726?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1458&q=80"},
   {pto:"https://images.unsplash.com/photo-1584282000185-87fb204a83d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=486&q=80"},
   {pto:"https://images.unsplash.com/photo-1585157603253-7b3e36555495?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1371&q=80"},
   {pto:"https://images.unsplash.com/photo-1585157603209-378be66bede1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1512&q=80"},
   {pto:"https://images.unsplash.com/photo-1580715911279-6bc35abc2e4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"}
]
var clutter = ``;
arr.forEach(function(val){
   clutter += `<div class="sld">
   <img src="${val.pto}" alt="">
</div>`
})
document.querySelector("#sliderparent").innerHTML = clutter;


circle.addEventListener("click",function(dets){
     console.log("chal raha")
      document.querySelector('#fullnav').style.opacity = '1';
      document.querySelector("#fullnav").style.position.left = "0%"

   
        
 })




 document.querySelector('#fullnav #link').addEventListener("mouseover",function(){
    document.querySelector('#fullnav #link').style.transform =   
    document.querySelector('#fullnav #link #photu').style.display = 'initial';
 })
 
 document.querySelector('#fullnav #link').addEventListener("mouseout",function(){
    document.querySelector('#fullnav #link #photu').tranform =  
    document.querySelector('#fullnav #link #photu').style.display = 'none';
 })

 var t1 = gsap.timeline()

 t1
.to( ".hr", {
    duration: 7,
    ease: Expo.Fadeout,
    opacity:1,
    
     Y: 20

})

.to( ".hs h3", {
   duration: 2,
   ease: Expo.FadeIn,
   innerWidth:100,
    Y: 20

},"-2")