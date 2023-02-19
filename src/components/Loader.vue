<template>
  <div class="lds-dual-ring"></div>
</template>

<style>
.lds-dual-ring {
  display: inline-block;
  width: 64px;
  height: 64px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 46px;
  height: 46px;
  margin: 1px;
  border-radius: 50%;
  border: 5px solid rgb(82, 187, 240);
  border-color: rgb(34, 146, 202) transparent rgb(34, 146, 202) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
