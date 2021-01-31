import React from 'react'

export default function CatalogCard(props) {
  const { id, title, description, date } = props
  
  return (
    <div className="relative col-span-1 border border-gray-300 shadow-md px-3 py-2 rounded-md">
  
      <div className="flex justify-between items-center border-b">
        <label className="text-lg font-bold">{title}</label>
      </div>

      <div className="mb-4 py-2 overflow-ellipsis">
        <p className="text-sm">{description}</p>
      </div>

      <div className="absolute right-0 bottom-0 px-3 py-2">
        <label className="text-xs font-medium">{date}</label>
      </div>
      
    </div>
  )
}