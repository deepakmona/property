import './Eigth.css';
import laptopui from '../assets/laptopui.webp'
import { ComposedChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,Legend ,Area,Line,ResponsiveContainer} from 'recharts';


export default function Eigth() {

    const data = [
        {
          "name": "2018",
          "uv": 4000,
          "pv": 5400,
          "amt": 2400
        },
        {
          "name": "2019",
          "uv": 3000,
          "pv": 4398,
          "amt": 2210
        },
        {
          "name": "2020",
          "uv": 2000,
          "pv": 6800,
          "amt": 2290
        },
        {
          "name": "2021",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "2022",
          "uv": 1890,
          "pv": 5000,
          "amt": 2181
        },
        {
          "name": "2023",
          "uv": 2390,
          "pv": 3800,
          "amt": 2500
        },
        {
          "name": "2024",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        }
      ]

  return (
    <div>
      <div className="eigth">
       <div className="twohalfofeigth">
        <h2>Home loan tools</h2>
        <p>Find the best Housing Loan rates in India and Find how much you can save with our Home Loan Calculator</p>
        <img src={laptopui} alt="error" />
       </div>

       <div className="twohalfofeigth">
        <h2>House Prices</h2>
        <p>Find national property trends with our House Price Index and chek privious data of our property</p>
        <ResponsiveContainer width="100%" aspect={4.0/3.0} maxHeight={400}>
    <ComposedChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#f5f5f5" />
      <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
    </ComposedChart>
  </ResponsiveContainer>

   
       </div>
      </div>

    </div>
  )
}
