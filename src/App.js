import './App.css'

const Data = [
  {
    user: 'Akomolafe Ibrahim Olalekan ',
    name: 'Chappy',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659285021/Empower/20220428_122029_-_Moyomi_Fashion_Empire_aun101.jpg',
    points: '10',
  },
  {
    user: 'Shonuyi Kofoworola',
    name: 'Rola♥️',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659285270/Empower/images_1_-_Shonuyi_Kofoworola_yb4iri.jpg',
    points: '10',
  },
  {
    user: 'Oguchi Winifred ',
    name: 'Iffhy',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659285378/Empower/Snapchat-26071882_-_Oguchi_Winifred_n1t0uw.jpg',
    points: '9',
  },
  {
    user: 'Sowemimo Alamin',
    name: 'alampopo ',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659285689/Empower/F13CB74C-0DE7-48A4-8916-AEA6B238CA5B_-_Alamin_Sowemimo_f12ocd.jpg',
    points: '4',
  },
  {
    user: 'Abdulqudus Adewoye Bankole ',
    name: 'Hardebhanks',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659285856/Empower/Snapchat-667724669_-_Qudus_Bankole_jtgoq0.jpg',
    points: '8',
  },
  {
    user: 'OLUFEMI Victor DAMILOLA ',
    name: 'Whizninja',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659286111/Empower/download3_flgvt4.png',
    points: '9',
  },
  {
    user: 'Akinola Fawaz Ololade',
    name: 'Phawaaz',
    image:
      'http://res.cloudinary.com/osaz/image/upload/v1659286353/Empower/Snapchat-957341371_-_Akinola_Fawaz_ewl9vu.jpg',
    points: '0',
  },
  {
    user: 'Kalu Queen Onyekachi',
    name: 'Kwinkalu',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659286699/Empower/IMG-20220731-WA0008_-_Precious_Kalu_c2p8rn.jpg',
    points: '4',
  },
  // {
  //   user: 'hi',
  //   name: 'Chappy',
  //   image: 'hey',
  //   points: '0',
  // },
]
const topThree = Data.sort((a, b) => b.points - a.points).slice(0, 3)
const restOfData = Data.sort((a, b) => b.points - a.points).slice(3)
console.log(restOfData)
function App() {
  return (
    <div className='App'>
      <div className='center'>
        <div className='top3'>
          <div className='two item'>
            <div className='pos'>2</div>
            <img src={topThree[1].image} alt='' className='pic' />
            <div className='name'>{topThree[1].name}</div>
            <div className='score'>{topThree[1].points}</div>
          </div>
          <div className='one item'>
            <div className='pos'>1</div>
            <img src={topThree[0].image} alt='' className='pic' />
            <div className='name'>{topThree[0].name}</div>
            <div className='score'>{topThree[0].points}</div>
          </div>
          <div className='three item'>
            <div className='pos'>3</div>
            <img src={topThree[2].image} alt='' className='pic' />
            <div className='name'>{topThree[2].name}</div>
            <div className='score'>{topThree[2].points}</div>
          </div>
        </div>
        <div className='list'>
          {restOfData.map((item, i) => (
            <div className='item' key={i + 4}>
              <div className='pos'>{i + 4}</div>
              <img src={item.image} alt='' className='pic' />
              <div className='name'>{item.name}</div>
              <div className='score'>{item.points}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
