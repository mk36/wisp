<style lang="scss">
.start-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1;
  background-image: linear-gradient(to top, #02132c, #0d0e26, #130920, #16051a, #160114);

  &__start-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    padding: 1em;
    font-size: 3em;
    border-radius: 1em;
    cursor: pointer;

    &:hover {
      color: white;
      background-image: linear-gradient(to right, #033885, #353182, #4e287c, #631b74, #730268);}
  }
}
</style>

<template>
  <div>
    <a-scene>
      <a-assets>
                  <audio :id="soundBg" src="sounds/the-great-unknown.mp3" preload></audio>
      </a-assets>

      <a-camera></a-camera>

      <a-light type="ambient" color="#FFFFFF" intensity="1.0"></a-light>

      <a-sky color="black"></a-sky>

      <a-entity id="moon" gltf-model="url(/models/moon.glb)"
                position="80 30 -80" scale="6.5 6.5 6.5" rotation="0 0 0" :animation="moonAnimation">
        <a-entity position="0.5 1.1 1.9" light="type: spot; angle: 45; distance: 20; color: yellow; intensity: 10;"
                  :animation="lightColorAnimation"></a-entity>
      </a-entity>

      <a-entity :id="characterID" gltf-model="url(/models/wisp.glb)"
                :position="movePositions[0]" rotation="0 90 0">
        <a-entity :position="{x: -wispGlowLightPos.x, y: wispGlowLightPos.y, z: wispGlowLightPos.z}" :light="glowLightProperties"
                  :animation="glowLightAnimation"></a-entity>
        <a-entity :position="wispGlowLightPos" :light="glowLightProperties"
                  :animation="glowLightAnimation"></a-entity>
      </a-entity>
    </a-scene>

    <section class="start-wrapper">
      <button class="start-wrapper__start-btn" @click="startExperience()">Start Experience</button>
    </section>
  </div>
</template>

<script>
export default {
  props: [''],
  components: {},
  data() {
    return {
      // ids and elements
      characterID: 'wisp',
      charElm: null,
      soundBg: 'sound-bg',
      // animations
      glowLightAnimation: 'property: light.color; from:rgb(255, 255, 255); to:rgb(0, 0, 0); dir: alternate; dur: 1500; easing: easeInCirc; loop: true',
      // lightColorAnimation: 'property: light.color; from:rgb(255, 0, 0); to:rgb(255, 99, 71); dir: alternate; dur: 1000; easing: linear; loop: true',
      lightColorAnimation: 'property: light.intensity; from:1; to:10; dir: alternate; dur: 1000; easing: linear; loop: true',
      moonAnimation: {
        property: 'rotation',
        to: {y: 360},
        dur: 15000,
        easing: 'linear',
        loop: true,
      },
      moveAnimation: {
        property: 'position',
        to: {x: 0, y: 0, z: 0}, // default, get overwritten
        dur: 3000,
        easing: 'linear',
      },
      rotateAnimation: {
        property: 'rotation',
        to: {x: 0, y: 270, z: 0},
        dur: 2000,
        easing: 'linear',
      },
      animPos: 1,
      animations: [],
      animNumber: 1,
      // object positions
      wispGlowLightPos: {x: -5.6, y: 1.1, z: 0},
      lightColorPosition: '0.1 1.2 -2.9',
      movePositions: [
        {x: -5.5, y: 2.9, z: -5},
        {x: 0, y: 0, z: -5},
        {x: 5, y: 2.9, z: -5},
      ],
      // wisp glow light properties
      glowLightProperties: 'type: spot; angle: 180; distance: 20; color: white; intensity: 6'
    };
  },
  mounted() {
    this.charElm = document.getElementById(this.characterID);
    this.createAnimations();
  },
  methods: {
    startExperience() {
      let wrapper = document.querySelector('.start-wrapper');

      if (wrapper) {
        wrapper.style.display = 'none';
        this.setUpAnimationEvents();
        this.playSound();
      }
    },
    playSound() {
      let elm = document.getElementById(this.soundBg);

      if (elm) {
        elm.play();
      }
    },
    createAnimations() {
      this.animations.push(
          this.getMoveAnimation(0),
          this.getMoveAnimation(1),
          this.getMoveAnimation(2),
          this.getRotationAnimation(270),
          this.getMoveAnimation(0),
          this.getRotationAnimation(90)
      );
    },
    getMoveAnimation(index) {
      let anim = {...this.moveAnimation};
      anim.to = this.movePositions[index];
      return anim;
    },
    getRotationAnimation(degreesY) {
      let anim = {...this.rotateAnimation};
      anim.to = {x: 0, y: degreesY, z: 0};

      return anim;
    },
    setUpAnimationEvents() {
      if (this.charElm) {
        this.setCurrentAnimation(this.animNumber);

        this.charElm.addEventListener('animationcomplete', () => {
          this.animNumber = this.animNumber < (this.animations.length - 1) ? this.animNumber + 1 : 1;
          this.charElm.removeAttribute('animation'); // remove existing animation now it's complete
          this.setCurrentAnimation(this.animNumber);
        });
      }
    },
    setCurrentAnimation(posIndex) {
      this.charElm.setAttribute('animation', this.animations[posIndex]); // update the current animation
    },
  }
};
</script>
