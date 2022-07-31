import './App.css'

const Data = [
  {
    id: 1,
    name: 'Randy06',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
    points: '57',
  },
  {
    id: 2,
    name: 'James07',
    image: 'https://randomuser.me/api/portraits/men/31.jpg',
    points: '23',
  },
  {
    id: 3,
    name: 'Ava01',
    image: 'https://randomuser.me/api/portraits/women/91.jpg',
    points: '90',
  },
  {
    id: 4,
    name: 'Gabriel11',
    image: 'https://randomuser.me/api/portraits/men/77.jpg',
    points: '50',
  },
  {
    id: 5,
    name: 'Sandra23',
    image: 'https://randomuser.me/api/portraits/women/30.jpg',
    points: '70',
  },
  {
    id: 6,
    name: 'lee4',
    image: 'https://randomuser.me/api/portraits/women/85.jpg',
    points: '40',
  },
  {
    id: 7,
    name: 'Lance23',
    image: 'https://randomuser.me/api/portraits/men/88.jpg',
    points: '55',
  },
  {
    id: 8,
    name: 'Toyo87',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
    points: '30',
  },
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
            <div className='item' key={item.id}>
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
