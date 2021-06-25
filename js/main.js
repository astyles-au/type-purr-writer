// main script
console.log('main js script loaded');

// Howler js sound files
// Howler js sounds array
let catTypingSounds = [
    'sounds/cat-type-sound-1.mp3',
    'sounds/cat-type-sound-2.mp3',
    'sounds/cat-type-sound-3.mp3',
]

// random sound function
randomise = () => {
    let randomTypingSound = catTypingSounds[Math.floor(Math.random() * catTypingSounds.length)];
    return randomTypingSound
}

// vue component - type-writer form
Vue.component('type-writer', {
    data: function () {
        return {
            formText: ''
        }
    },

    // watcher
    watch: {
        formText: function () {
            console.log('Some keys were pressed!')
            // howler js sound play
            let sound = new Howl({
                src: [randomise()],
                autoplay: true,
                loop: false,
                volume: 0.5,
                onend: function () {
                    console.log('Finished!');
                }
            });
        }
    },

    methods: {

        // play typewriter ding sound via howler js - method
        nextLine: function () {
            console.log('You pressed enter!')
            // howler js sound play
            let sound = new Howl({
                src: [sound2],
                autoplay: true,
                loop: false,
                volume: 0.5,
                onend: function () {
                    console.log('Finished!');
                }
            });
        }, // end of nextLine method

    },
    template: `
    <form v-on:submit.prevent="onSubmit"
    class="animated fadeInUp">
        <textarea
        name="typeWriterPage"
        id="typeWriterPage"
        cols="30" rows="10"
        placeholder="Start typing..."
        v-model="formText"
        v-on:keyup.enter="nextLine"
        >
        </textarea>
    </form>
    `
})

// main vue instance
const app = new Vue({
    el: '#app',
    data: {
        // vueTest: 'Vue loaded ok!' // keeping this in place to test vue loaded as test
        pageHeading: 'Type-PURR-writer'
    }
});