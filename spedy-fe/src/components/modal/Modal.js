import React, { useState } from 'react'

export default function Modal(props) {
  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")
  const { onClose } = props

  // APIPost
  function submit() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Title: title, Description: description })
    };
    fetch('http://localhost:44370/api/catalog/addcatalog', requestOptions)
        .then(response => console.log("Ok!"))
  }

  return (
    <div className="">
      <div className="fixed inset-0 bg-black w-full h-full opacity-75 z-40"></div>
      <div className="rounded-lg fixed z-50 inset-0 my-auto h-auto mx-auto bg-white max-w-lg px-4 sm:px-0" style={{maxHeight: '400px'}}>
        <div className="justify-center w-full h-full py-2">
          <label className="px-4 py-2 font-medium text-2xl">Criar um classificado</label>

          <form onSubmit={e => e.preventDefault()} className="w-full px-4 py-1">
            <div className="my-4">
              <label className="mb-1 block text-md font-medium">Titulo</label>
              <input id="Title" onChange={e => setTitle(e.target.value)} className="border shadow-md rounded-md px-2 py-1 w-full" type="text" placeholder="Titulo do classificado" />
            </div>
            <div className="my-2">
              <label className="mb-1 block text-md font-medium">Descrição</label>
              <textarea id="Description" onChange={e => setDescription(e.target.value)} className="border shadow-md rounded-md px-2 py-1 w-full" rows="6" placeholder="Descrição do classificado" />
            </div>
          </form>
          <div className="flex mb-4 justify-end px-2 pb-4 space-x-4">
            <button onClick={onClose} className="border shadow-md px-4 py-2 rounded-lg hover:bg-gray-100" type="button">Voltar</button> 
            <button onClick={e => submit()}className="border shadow-md px-4 py-2 rounded-lg bg-green-200 hover:bg-green-300">Criar</button>
          </div>

        </div>
      </div>
    </div>
  )
}