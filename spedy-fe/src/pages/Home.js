import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Modal from '../components/modal/Modal'
import Moment from 'moment'
import 'moment/locale/pt-br'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import fetchCatalogAction from '../redux/fetchCatalog'
import { getCatalogError, getCatalog, getCatalogPending } from '../redux/catalogReducer'

function Home(props) {
  Moment.locale('pt-br')
  const { catalog } = props
  const [ showModal, setShowModal ] = useState(false)

  useEffect(() => {
    const { fetchCatalog } = props
    fetchCatalog()
  },[])
  console.log(catalog)

  return (
    <>
    <div className="max-w-screen-xl m-auto">
      <div className="mt-12 mb-2 flex justify-between items-center px-4">
        <h1 className="font-bold text-2xl font-gray-700">Classificados</h1>
        <button type="button" onClick={(e) => setShowModal(true)} className="border shadow-md bg-gray-200 px-3 py-2 rounded-lg text-gray-900 font-bold hover:bg-gray-300">+ Novo Classificado</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-2 px-4">
        {catalog?.map((catalog) => { 
          return <Card key={catalog.id} title={catalog.title} description={catalog.description} date={Moment(catalog.date).format('DD \\d\\e MMMM \\d\\e YYYY')} /> 
        })}
      </div>
      {showModal &&
        <Modal onClose={(e) => setShowModal(false)} />
      }
    </div>
    </>
  )
}

const mapStateToProps = state => ({
    error: getCatalogError(state),
    catalog: getCatalog(state),
    pending: getCatalogPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchCatalog: fetchCatalogAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)