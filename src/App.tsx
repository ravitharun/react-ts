import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
  type userdatatype = {
    name: String,
    email: String,
    passowrd: number, ischecked: boolean
  }

  type apiresponse = {
    userId: String,
    id: number,
    title: number,
    completed: string
  }
  const [userinfo, setname] = useState("")
  const [useremail, setemail] = useState("")
  const [passowrd, setpassowrd] = useState("")
  const [ischecked, setischecked] = useState(false)
  const [apiuser, setapi] = useState<apiresponse[]>()

  const handelInput = (e: React.FormEvent<HTMLFormElement>) => {
    // console.log(e,'')
    e.preventDefault()
    let data_check: userdatatype = {
      name: userinfo,
      email: useremail,
      passowrd: Number(passowrd),
      ischecked: ischecked
    }
    if (Number.isNaN(data_check.passowrd)) {
      return alert("password schuld be number")
    }
    if (data_check.ischecked) {

      console.log(data_check)
      return
    }
    alert("requid to click")
  }


  useEffect(() => {
    const apiresponse = async () => {
      try {

        const getdata = await axios.get<apiresponse[]>("https://jsonplaceholder.typicode.com/posts")
        setapi(getdata.data)

      } catch (err) {
        console.log("error" + err)

      }

    }
    apiresponse()
  }, [])

console.log(apiuser,'apiuser')
  return (
    <>

      <form onSubmit={handelInput} >


        <input type="text" onChange={(e) => setname(e.target.value)} />
        <input type="email" onChange={(e) => setemail(e.target.value)} />
        <input type="password" onChange={(e) => setpassowrd(e.target.value)} />
        <input type="checkbox" name="" id="" checked={ischecked}
          onClick={(e) => setischecked(e.currentTarget.checked)
          } />
        <button >Submit</button>
      </form>


    </>
  )
}

export default App