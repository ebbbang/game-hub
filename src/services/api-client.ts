import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '86efd87b07734db8941e703ab79bb4eb'
  }
})
