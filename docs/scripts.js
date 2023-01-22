const reviews = [
  {
    id:1,
    name: 'Catni',
    job: 'Catnip connoisseur',
    img: 'images/1.jpg',
    text: "Meow, my furrry feline friends! I am feeling quite frisky after indulging in some of that delicious catnip. I can't stop rolling around and purring. My paws feel all tingly and my tail is twitching like crazy. I just want to chase some strings and nap in a sunny spot. Meow, meow!"
  },
  {
    id:2,
    name: 'Scot',
    job: "He's scottish",
    img: 'images/2.png',
    text: "Och aye, let's take a look at this portfolio website, shall we? Aye, it's a fine piece o' work, it is. The layout is easy on the eyes and the navigation is simple enough fer even a bairn tae understand. They truly show off the creator's talents. Ye can tell they've put a lot o' thought intae the design. And speakin' o' the portfolio pieces, they're a diverse bunch, showin' off a range o' skills and styles. The use of high-quality images brings the work tae life and gives a good sense o' the creator's style. All in all, this is a fine representation o' the creator's work, and it effectively showcases their abilities. Aye, I'd recommend takin' a look, if ye get the chance."
  },
  {
    id:3,
    name: 'Dogbo',
    job: "He's scottish",
    img: 'images/3.jpg',
    text: "Woof! My nose is telling me there's something interesting around here. I can smell all sorts of new scents, and I just have to find out what they are. My tail is wagging, and I'm ready to explore. I wonder what's over there? sniffs Oh, it's just a tree. But wait, what's that noise? barks Is someone coming? I'm so curious and excited! Woof woof!"
  },
  {
    id:4,
    name: 'Rigina Catwell',
    job: "Her Highness",
    img: 'images/4.jpg',
    text: "Oh please, I am a feline, we are superior creatures. I cannot be bothered with your human antics. I will grace you with my presence and maybe, just maybe, I'll deign to rub against your leg. But do not expect any more than that. I have more important things to attend to, like grooming and napping in the sun. Do try to keep up."
  },
  {
    id:5,
    name: 'Inda',
    job: "An okay person",
    img: 'images/5.jpg',
    text: "Alright, let's take a look at this portfolio website, shall we? The design is decent enough, nothing too flashy but it gets the job done. The content is also decent, it gives a general overview of your skills and work but it could use more detailed examples and more robust language."
  },
  {
    id:6,
    name: 'Me Ow',
    job: "Needs attention",
    img: 'images/6.jpg',
    text: "Meow, meow, meow, are you even listening to me? I've been meowing for what feels like forever, and yet you're just sitting there, ignoring me. I need your attention, and I need it now. I need to be petted and played with, and I need you to look at me and tell me how pretty I am. I am a cat, after all, and I deserve to be treated like the royalty that I am. So, please pay attention to me, and give me the love and attention I so rightly deserve.Meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow, meow"
  },
  {
    id:7,
    name: 'Boggo',
    job: "Clueless",
    img: 'images/7.jpg',
    text: "Woof, woof, I'm not really sure what's going on around here. I'll just lay here and wait for someone to tell me what to do. I'll wag my tail if you pet me, but I'm not really sure what you want me to do. I'll just go with the flow and see where this takes me. Woof, woof."
  },
  {
    id:8,
    name: 'Drago',
    job: "Confident",
    img: 'images/8.jpg',
    text: "Woof, woof, let's do this! I'm ready for whatever comes my way, bring on the challenges! I'm confident in my abilities and I know I can handle whatever you throw at me. I'm eager to please and I'll work hard to get the job done. I'm not afraid to take the lead and I'll make sure everything runs smoothly. With me by your side, success is guaranteed. Woof, woof!"
  },

]

const portraits = ['images/2.png', 'images/3.jpg', 'images/4.jpg', 'images/5.png', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg']
let index = 1;

const portrait = document.getElementById("portrait");
const leftArrow = document.getElementById('left');

leftArrow.addEventListener('click', function(){
  index = indexDecrement(index);
  portrait.src = portraits[index];
})

function indexDecrement(index){
  if (index===0){
    return (portraits.length-1);
  }

  return (index - 1);
}