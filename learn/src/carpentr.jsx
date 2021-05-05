import React from 'react'
import { useCarpentr } from 'carpentr'

const Users = () => {
const data = [
  { firstName: 'Ferris', lastName: 'Bueller', dob: '3-21-1962', occupation: 'student' },
  { firstName: 'Cameron', lastName: 'Frye', dob: '7-1-1956', occupation: 'student' },
  { firstName: 'Ferris', lastName: 'Bueller', dob: '3-21-1962', occupation: 'student' },
  { firstName: 'Cameron', lastName: 'Frye', dob: '7-1-1956', occupation: 'student' },
  { firstName: 'Ferris', lastName: 'Bueller', dob: '3-21-1962', occupation: 'student' },
  { firstName: 'Cameron', lastName: 'Frye', dob: '7-1-1956', occupation: 'student' },
  { firstName: 'Ferris', lastName: 'Bueller', dob: '3-21-1962', occupation: 'student' },
  { firstName: 'Cameron', lastName: 'Frye', dob: '7-1-1956', occupation: 'student' },
  { firstName: 'Ferris', lastName: 'Bueller', dob: '3-21-1962', occupation: 'student' },
  { firstName: 'Cameron', lastName: 'Frye', dob: '7-1-1956', occupation: 'student' },
  { firstName: 'Ferris', lastName: 'Bueller', dob: '3-21-1962', occupation: 'student' },
  { firstName: 'Cameron', lastName: 'Frye', dob: '7-1-1956', occupation: 'student' },
  { firstName: 'Ferris', lastName: 'Bueller', dob: '3-21-1962', occupation: 'student' },
  { firstName: 'Cameron', lastName: 'Frye', dob: '7-1-1956', occupation: 'student' },
  { firstName: 'Sloane', lastName: 'Peterson', dob: '6-19-1967', occupation: 'student' }
]

  const payload = useCarpentr({
    initialData: data,
    searchKeys: ['firstName', 'lastName']
  })

  const renderTable = () => {
    return (
      <div>
        <div className='form-row mb-3'>
          <input
            className='form-control'
            placeholder='Search...'
            value={payload.search}
            onChange={payload.setSearchTerm}/>
        </div>
        <table className='table table-hover mb-4'>
          <thead className='bg-primary text-white'>
            <tr>
              <th name='firstName' onClick={payload.setColumnSortToggle}>FirstName</th>
              <th name='lastName' onClick={payload.setColumnSortToggle}>LastName</th>
              <th name='dob' onClick={payload.setColumnSortToggle}>Date Of Birth</th>
              <th name='occupation' onClick={payload.setColumnSortToggle}>Occupation</th>
            </tr>
          </thead>
          <tbody>
            {payload.visibleData.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.dob}</td>
                  <td>{user.occupation}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <div className='row my-4 justify-content-between'>
          <div className='col-md-6'>
            <div className='form-inline'>
              <label className='my-1 mr-2'>Result set: </label>
              <select
                className='form-control'
                value={payload.resultSet}
                onChange={(e) => { payload.setResultSet(parseInt(e.target.value)) }}>
                <option>5</option>
                <option>10</option>
                <option>15</option>
              </select>
            </div>
          </div>

          <div className='col-md-6'>
            <ul className='pagination rounded-flat pagination-primary d-flex justify-content-center'>
              <li
                className={payload.prevDisabled ? 'page-item invisible' : 'page-item'}
                onClick={() => { payload.setCurrentPage(payload.currentPage - 1) }}>
                <a className='page-link' aria-label='Next'>
                  <span aria-hidden='true'>&laquo;</span>
                  <span className='sr-only'>Previous</span>
                </a>
              </li>

              {payload.paginationButtons.map((page, i) => {
                return (
                  <li key={i} className={payload.currentPage === page ? 'page-item active' : 'page-item'}>
                    <span className='page-link pointer' onClick={() => { payload.setCurrentPage(page) }}>{page}</span>
                  </li>
                )
              })}

              <li
                className={payload.nextDisabled ? 'page-item invisible' : 'page-item'}
                onClick={() => { payload.setCurrentPage(payload.currentPage + 1) }}>
                <a className='page-link' aria-label='Next'>
                  <span aria-hidden='true'>&raquo;</span>
                  <span className='sr-only'>Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-12'>
          <h1>Users</h1>
          {renderTable()}
        </div>
      </div>
    </div>
  )
}

export default Users
