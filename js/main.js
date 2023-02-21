console.log("main js script loaded");

let catTypingSounds = [
  "sounds/cat-type-sound-1.mp3",
  "sounds/cat-type-sound-2.mp3",
  "sounds/cat-type-sound-3.mp3",
];

(randomise = () => {
  let randomTypingSound;
  return catTypingSounds[Math.floor(Math.random() * catTypingSounds.length)];
}),
  Vue.component("type-writer", {
    data: function () {
      return { formText: "" };
    },
    watch: {
      formText: function () {
        console.log("Some keys were pressed!");
        let sound = new Howl({
          src: [randomise()],
          autoplay: !0,
          loop: !1,
          volume: 0.5,
          onend: function () {
            console.log("Finished!");
          },
        });
      },
    },
    template:
      '\n    <form v-on:submit.prevent="onSubmit"\n    class="animated fadeInUp">\n        <textarea\n        name="typeWriterPage"\n        id="typeWriterPage"\n        cols="30" rows="10"\n        placeholder="Start typing..."\n        v-model="formText"\n        v-on:keyup.enter="nextLine"\n        >\n        </textarea>\n    </form>\n    ',
  });
const app = new Vue({ el: "#app", data: { pageHeading: "Type-PURR-writer" } });
