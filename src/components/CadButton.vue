<li class="line-1">
    <img src="@\assets\images\image 23.png" alt="card">
    <img src="@\assets\images\image 16.png" alt="card">
    <img src="@\assets\images\image 25.png" alt="card">
    <img src="@\assets\images\image 30.png" alt="card">
    </li>
  
    <li class="line-2">
    <img src="@\assets\images\image 11.png" alt="card">
    <img src="@\assets\images\image 5.png" alt="card">
    <img src="@\assets\images\image 10.png" alt="card">
    <img src="@\assets\images\image 18.png" alt="card">
    <img src="@\assets\images\image 24.png" alt="card">
    </li>
  
    <li class="line-3">
    <img src="@\assets\images\image 27.png" alt="card">
    <img src="@\assets\images\image 8.png" alt="card">
    <img src="@\assets\images\image 14.png" alt="card">
    <img src="@\assets\images\image 9.png" alt="card">
    </li>


.cards{
  @apply ml:flex flex-row flex-nowrap grow bg-red-400 basis-1/6
   
  }
  
.line-1{
  @apply  ml:bg-red-50 
}
.line-7{
  @apply ml3:bg-black ml:list-image-none 
}
.card-1{
  @apply ml:bg-black ml-0 -mt-2 relative z-10 h-20 w-14 object-contain
}
.card-2{
  @apply ml:bg-slate-800 ml-0 z-10 relative 
}
.line-2{
  @apply ml:bg-red-400 
}
.card-3{
  @apply ml:bg-yellow-300 mt-3 ml-0 h-20 w-14 object-fill
}
.card-4{
  @apply ml:bg-white -ml-6 -mt-2  h-20 w-14 object-fill
}
.card-5{
  @apply ml:-ml-0 bg-slate-500 -mt-9  z-20 relative   h-20 w-14 object-contain
}
.line-3{
  @apply  ml:bg-red-800 
}
.card-6{
  @apply bg-orange-500 mt-3 -ml-0  h-20 w-14 object-fill
}
.card-7{
  @apply ml:bg-blue-500 -ml-6 h-20 w-14 object-fill
}
.line-4{
  @apply  ml:bg-red-500 
}
.card-8{
  @apply  ml:bg-orange-200 relative z-30 ml-20  -mt-7 h-20 w-14 object-contain
}
.card-9{
  @apply bg-white h-20 w-14 object-fill ml-1 -mt-3 relative z-40

}
.card-10{
  @apply bg-rose-900 -ml-5 mt-1 h-20 w-14 object-fill

}
.card-11{
  @apply bg-blue-600  h-20 w-14 object-contain -mt-6 ml-10


}
.card-12{
  @apply bg-gray-800  h-20 w-14 ml-1 -mt-3 relative z-50

}
.card-13{
  @apply bg-yellow-400   -mt-4 ml-1
}
.line-5{ 
  @apply ml:bg-yellow-100  
}
.line-6{
  @apply  ml:bg-blue-600
}
