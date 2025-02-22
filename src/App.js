import './App.css';
import Note from './components/Note/Note';
import Notebar from './components/NoteBar/Notebar';
let note = {
  name : "Test note",
  text : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis metus, consectetur at elementum a, blandit id enim.
            Quisque dictum blandit turpis, non semper ante congue eu. In lobortis, est ut scelerisque consequat, felis tellus luctus odio,
            ac feugiat nulla sem ac purus. Proin vitae ipsum gravida, ornare sem quis, posuere lorem. Vestibulum ac elit ac leo posuere
            gravida. Aenean eget sem sed lorem tempor commodo. Proin sodales augue nec neque posuere, id ultrices metus tincidunt.
            Pellentesque dictum ornare aliquam. Morbi sollicitudin interdum orci, sed vehicula magna tincidunt sed. Integer in nisl lectus.
            Praesent ante orci, imperdiet et vehicula id, tempor eget urna. In ornare lacus a mauris vulputate, maximus tincidunt ex fringilla.
            Praesent ut congue massa, sit amet condimentum arcu. Pellentesque posuere erat in vestibulum malesuada. Nunc luctus elementum nisl
            eu fermentum. Curabitur sit amet gravida purus. Phasellus auctor lectus nisl, a vulputate lacus placerat at. Sed pretium pretium maximus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus luctus consectetur. Nullam interdum libero a justo molestie, a ornare
            diam placerat. Maecenas porttitor non massa sed porttitor. Praesent maximus eget eros sed vulputate.
            Vestibulum ornare vulputate feugiat. Ut aliquam enim justo, vel tempus arcu mollis ut. Ut rutrum suscipit pharetra. Ut venenatis pretium
            purus, consequat suscipit velit. Mauris blandit dui quis tellus pharetra vulputate ac a magna. In volutpat enim laoreet odio tristique,
            sit amet vulputate urna posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut a finibus eros.
            Aenean tincidunt nisl sit amet tellus efficitur, vitae iaculis nibh porta. Praesent pulvinar sagittis libero, a interdum nunc egestas et.
            Aliquam tempor risus lacus, eu imperdiet quam suscipit a. Aliquam erat volutpat. Donec mattis rhoncus dolor ac dignissim. Nunc mollis non
            neque eget scelerisque. Nullam suscipit varius nisl id congue. Quisque fringilla mauris elit, eget ultrices massa elementum et. Proin dapibus 
            velit vel nulla sodales malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Nunc imperdiet, eros in dapibus bibendum, massa metus egestas ipsum, a mollis elit tortor sit amet sapien. Donec a elit convallis quam rhoncus 
            ullamcorper. Nulla lacus mi, viverra fermentum leo sed, dapibus pretium justo. Quisque at neque in felis aliquet malesuada a non velit. Nulla 
            luctus ac tortor et sagittis. Praesent ut lectus sem. Maecenas mollis mattis imperdiet. Nulla vestibulum orci id nisl luctus ullamcorper. Sed 
            lacinia ut eros et viverra. Vestibulum nisl odio, tempor nec rutrum vel, lobortis eget risus.`
}
function App() {
  return (
    <div className="App">
      <Note  note={note}/>
      <Notebar/>
    </div>
  );
}

export default App;
