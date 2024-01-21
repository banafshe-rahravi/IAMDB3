<template>
 <div class="container">
  
  <ul class="cards">
  <!-- <Img src="" alt="card" /> -->
  <!-- <li class="line-7">
    <img class="card-20" src="" alt="card">
    <img class="card-21" src="" alt="card">
  </li> -->  
  <li class="line-1">
    <img class="card-1" src="@\assets\images\image 11.png" alt="card">
    <img class="card-2" src="@\assets\images\image 27.png" alt="card">
  </li>
  <li class="line-2">
  <img class="card-3" src="@\assets\images\image 5.png" alt="card">
  <img  class="card-4" src="@\assets\images\image 28.png" alt="card">
  </li>
<li class="line-3">
  <img class="card-5" src="@\assets\images\image 23.png" alt="card">
    <img class="card-6" src="@\assets\images\image 10.png" alt="card">
    <img class="card-7" src="@\assets\images\image 14.png" alt="card">
  </li>
  <li class="line-4">
  <img class="card-8" src="@\assets\images\image 16.png" alt="card">
  <img class="card-9" src="@\assets\images\image 18.png" alt="card">
  <img class="card-10" src="@\assets\images\image 9.png" alt="card">
</li>
<li class="line-5">
  <img class="card-11" src="@\assets\images\image 25.png" alt="card">
  <img class="card-12" src="@\assets\images\image 24.png" alt="card">
</li>
<li class="line-6">
  <img class="card-13" src="@\assets\images\image 30.png" alt="card">
</li>
 </ul>
  <section>
    <h1 class="title">IAMDB</h1>
    <div class="line-7">
    <img class="card-14" src="@\assets\images\image 17.png" alt="card">
    <img class="card-15" src="@\assets\images\image 26.png" alt="card">
    <img class="card-16" src="@\assets\images\image 29.png" alt="card">
  </div>
  <div class="foo">
    <input class="favorite" type="text" placeholder="Your favorite movie ..." > 
      <btn class="btn">
        <p>search</p>
       <span><img class="search" src="@\assets\images\Vector (9).png" alt="s"></span>
      </btn>
    </div>
    
  </section>
  
</div>
</template>
<script setup>
// import Img from '@/components/Img.vue'
</script>
<style lang="postcss"  scoped>
.container{
    @apply ml:h-screen bg-black mx-auto box-border w-auto ml2:bg-red-400 ml3:bg-green-400 ls2:bg-red-200
     ls3:bg-green-700
          
}
 .title{
   @apply  ml:font-roboto text-5xl font-bold leading-sx text-colorTitle bg-colorTheme block text-center
   ml2:text-5xl ml3:text-6xl ml4:text-6xl ls:text-7xl ls2:text-7xl
    ls3:text-8xl 
} 
.cards{
  @apply ml:flex flex-row flex-nowrap space-x-3 mb-[18.53px]

   
  }
  
.line-1{
  @apply  ml:list-image-none 
}
.line-7{
  @apply ml:list-image-none
}
.card-1{
  @apply ml:relative z-10 h-20 w-14 object-contain -mt-2
}
.card-2{
  @apply ml:mt-0
}
.line-2{
  @apply ml:mt-2
}
.card-3{
  @apply ml:h-20 w-14 object-fill -ml-1 rotate-3
}
.card-4{
  @apply ml:h-20 w-14 object-fill -ml-7 mt-1 rotate-6
}
.card-5{
  @apply ml:h-20 w-14 object-contain -mt-0 ml-5
}
.line-3{
  @apply  ml:-mt-8
}
.card-6{
  @apply ml:h-20 w-14 object-fill -ml-2 -mt-7
}
.card-7{
  @apply ml:h-20 w-14 object-fill -ml-8 mt-1
}
.line-4{
  @apply  ml:-mt-6 
}
.card-8{
  @apply  ml:relative z-30 h-20 w-14 object-contain -mt-1
}
.card-9{
  @apply ml:h-20 w-14 object-fill  relative z-40 -ml-7 -mt-5

}
.card-10{
  @apply ml:h-20 w-14 object-fill -ml-14 mt-2

}
.card-11{
  @apply ml:h-20 w-14 object-contain mt-0


}
.card-12{
  @apply ml:h-20 w-14 relative z-50 -ml-8 -mt-3

}
.card-13{
  @apply ml:-mt-1
}
.line-5{ 
  @apply ml:-mt-6 
}
.line-6{
  @apply  ml:list-image-none 
}


.line-7{
  @apply ml:inline-flex
}
.card-14{
  @apply ml:-ml-4 -mt-3 h-20 w-14 object-contain mb-20
}
.card-15{
  @apply ml:mt-2 h-20 w-14 rotate-2 mb-20
}
.card-16{
  @apply ml:mt-6 h-20 w-14 rotate-2
}
.foo{
  @apply ml:block ls3:flex 
}
.favorite{
  @apply ml:bg-black w-11/12 h-11  text-gray-400 border border-solid border-white rounded-in mx-4 px-8 py-3
  ls3:flex grow shrink basis-5/6  text-left 
}
.btn{
  @apply ml:bg-red-700 h-11 w-11/12 text-white mt-3 font-normal text-base rounded-in border-none py-3 mx-4 
    ls3:flex grow-0 shrink-0 basis-1/6 text-center ml-3 mr-
}
.search{
  @apply ml:ml-3 pt-1 
}

</style>