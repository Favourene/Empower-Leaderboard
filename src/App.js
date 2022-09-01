import './App.css'

const Data = [
  {
    user: 'Abdulqudus Adewoye Bankole ',
    name: 'Hardebhanks',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659285856/Empower/Snapchat-667724669_-_Qudus_Bankole_jtgoq0.jpg',
    points: '50',
  },
  {
    user: 'Adedeji Oluwatimileyin ',
    name: 'Adedeji',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659286109/Empower/download5_f4omtl.png',
    points: '37',
  },
  {
    user: 'Adejola samson',
    name: 'Itzpoopman',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659312358/Empower/366F25F7-6F22-4127-98F7-6BFEB6D0A3F1_-_Adejola_Samson_pb5v72.jpg',
    points: '46',
  },
  {
    user: 'Adelanwa Zainab Adebimpe',
    name: 'Zaine',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659364472/Empower/20220303_112433_-_Zainab_Adelanwa_tph3kl.jpg',
    points: '42',
  },
  {
    user: 'Akintola Tosin',
    name: 'Akintola',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659286110/Empower/download2_syacra.png',
    points: '16',
  },
  {
    user: 'Akomolafe Ibrahim Olalekan ',
    name: 'Chappy',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659285021/Empower/20220428_122029_-_Moyomi_Fashion_Empire_aun101.jpg',
    points: '36',
  },
  {
    user: 'Alimi Habeeb Oladimeji',
    name: 'Alimi',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659286112/Empower/download_if339f.png',
    points: '3',
  },
  {
    user: 'Atoyebi Taiwo',
    name: 'Ayotebi',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659286109/Empower/download5_f4omtl.png',
    points: '13',
  },
  {
    user: 'Awojobi Sheriffdeen Ayobami',
    name: '@Ayomi',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659312150/Empower/Snapchat-1293450082_-_Apex_Monger_i6axph.jpg',
    points: '28',
  },
  {
    user: 'Bello Deborah',
    name: 'Debs',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659286110/Empower/download4_o4rj3k.png',
    points: '46',
  },
  {
    user: 'Boluwatife Damilola Somorin',
    name: 'Bolumorin',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659313822/Empower/IMG-20220727-WA0019_-_Boluwatife_Oluwadamilola_krkclv.jpg',
    points: '48',
  },
  {
    user: 'Ejide Ayodele David',
    name: 'Akinfola',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659314106/Empower/B59915B0-CB37-4BA7-A67B-1FE33FD3F4E0_-_Ayodele_Ejide_hek4hd.jpg',
    points: '60',
  },
  {
    user: 'Eweje Kabiru Adekunle',
    name: 'CAPITAL K',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659313565/Empower/0CD84905-4423-4FA7-AD7E-72DB01522FE3_-_Eweje_Abdulkabir_lq3aww.jpg',
    points: '52',
  },
  {
    user: 'Kalu Queen Onyekachi',
    name: 'Kwinkalu',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659286699/Empower/IMG-20220731-WA0008_-_Precious_Kalu_c2p8rn.jpg',
    points: '21',
  },
  {
    user: 'Lawal Ajibola ',
    name: 'Coded_JB',
    image:
      'https://res.cloudinary.com/osaz/image/upload/q_73/v1659318378/Empower/FB_IMG_1638859556619_-_lawal_ajibola_samson_finyqb.jpg',
    points: '44',
  },
  {
    user: 'Oguchi Winifred ',
    name: 'Iffhy',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659285378/Empower/Snapchat-26071882_-_Oguchi_Winifred_n1t0uw.jpg',
    points: '58',
  },
  {
    user: 'Okafor Precious Chinazaekpere ',
    name: 'Hushpresh',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659314777/Empower/7DA52491-F156-478C-9030-4D50E68D72B1_-_precious_chinazaekpere_arao0l.jpg',
    points: '37',
  },
  {
    user: 'OLUFEMI Victor DAMILOLA ',
    name: 'Whizninja',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659286111/Empower/download3_flgvt4.png',
    points: '23',
  },
  {
    user: 'Oshin Aishat Omolara',
    name: 'Tahsia',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659313944/Empower/DB225157-1D12-4180-AE3E-B246039FA2FC_-_Aishat_oshin_adi9yl.jpg',
    points: '59',
  },
  {
    user: 'Qasim Gana ',
    name: 'Qasim',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659286111/Empower/download3_flgvt4.png',
    points: '51',
  },
  {
    user: 'Sanni Oluwatobi omobolanle',
    name: 'Jhayanne🖤',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659312468/Empower/6641C3B7-EFFF-4DB9-8D29-C4DC5716BB4D_-_Jay_Anne_qqqsnh.jpg',
    points: '62',
  },
  {
    user: 'Shonuyi Kofoworola',
    name: 'Rola♥️',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659285270/Empower/images_1_-_Shonuyi_Kofoworola_yb4iri.jpg',
    points: '65',
  },
  {
    user: 'Sikiru Ololade ',
    name: 'Lade🟩',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659317202/Empower/B7E85AB3-FEA6-4E3B-9255-F68938CA1772_-_Denise_Astbury_aeyjip.jpg',
    points: '21',
  },
  {
    user: 'Solomon Odunusi',
    name: 'Zolomon',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659314243/Empower/IMG_20220102_124653_016_-_Solomon_Odunusi_ikkfwt.jpg',
    points: '64',
  },
  {
    user: 'Sowemimo Alamin',
    name: 'alampopo ',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659285689/Empower/F13CB74C-0DE7-48A4-8916-AEA6B238CA5B_-_Alamin_Sowemimo_f12ocd.jpg',
    points: '53',
  },
  {
    user: 'Sowunmi Oluwaseunfunmi ',
    name: 'Seunara247',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659313061/Empower/94B42CF6-3C4D-4A64-B9D7-DAD2507D8EB0_-_Sowunmi_Oluwaseunfunmi_yrgqsl.jpg',
    points: '44',
  },
  {
    user: 'Treasure Jerry-Imahiagbe ',
    name: 'Rea',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659315213/Empower/e1f899a87dfc2117a6bfd94d79f4a29c_-_Treasure_Imahiagbe_k6wemy.jpg',
    points: '54',
  },
  {
    user: 'Wisdom Ovhemerutho-Athe ',
    name: 'Wizzy',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659315641/Empower/IMG_20220612_153748_017_2_-_Wisdom_Ovhemerutho-Athe_lpirxz.jpg',
    points: '49',
  },
  {
    user: 'Yewande Ajetunmobi ',
    name: 'Wandey',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659363287/Empower/IMG-20220609-WA0010_-_Ajetunmobi_Yewande_sbiulc.jpg',
    points: '47',
  },

  // {
  //   user: 'Akinola Fawaz Ololade',
  //   name: 'Phawaaz',
  //   image:
  //     'http://res.cloudinary.com/osaz/image/upload/v1659286353/Empower/Snapchat-957341371_-_Akinola_Fawaz_ewl9vu.jpg',
  //   points: '0',
  // },

  // {
  //   user: 'Agbakoba Chibuogu ',
  //   name: 'Pearl',
  //   image:
  //     'https://res.cloudinary.com/osaz/image/upload/v1659314524/Empower/9AAA1014-1526-4118-9D74-118CA97943A6_-_Michelle_Chibuogu_jdckad.jpg',
  //   points: '0',
  // },

  // {
  //   user: 'Oluwadamilare Yusuf',
  //   name: 'Dasurf',
  //   image:
  //     'https://res.cloudinary.com/osaz/image/upload/v1659286112/Empower/download_if339f.png',
  //   points: '0',
  // },

  {
    user: 'Wisdom Ovhemerutho-Athe ',
    name: 'Wizzy',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659315641/Empower/IMG_20220612_153748_017_2_-_Wisdom_Ovhemerutho-Athe_lpirxz.jpg',
    points: '37',
  },

  // {
  //   user: 'faith Ajibola',
  //   name: 'faithstrings',
  //   image:
  //     'https://res.cloudinary.com/osaz/image/upload/v1659364104/Empower/PSX_20211209_134902_-_Ajibola_Faith_afn5ur.jpg',
  //   points: '0',
  // },

  {
    user: 'Fadeelah isah ',
    name: 'Fadeelah',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659286111/Empower/download3_flgvt4.png',
    points: '8',
  },
  {
    user: 'Onuchukwu Jeprike ',
    name: 'Jeprike',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659286112/Empower/download_if339f.png',
    points: '10',
  },
  {
    user: 'Peculiar Alonge ',
    name: 'Peculiar',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659286112/Empower/download_if339f.png',
    points: '7',
  },
  {
    user: 'Alonge Micah Olufolarin ',
    name: 'Micahlee',
    image:
      'https://res.cloudinary.com/osaz/image/upload/v1659312714/Empower/FB_IMG_16427520872511821_-_Micah_Alonge_h0vefu.jpg',
    points: '6',
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
