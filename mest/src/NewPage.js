import React from 'react'

const NewPage = (props) => {
  let items = []
  for (let i = 0; i <= props.pages; i++) {
    items.push(<li className="page-item" value={i} onClick={props.handleClick}><a className="page-link" href="/#">{i}</a></li>);
  }
  return (
    <nav aria-label="Page navigation example" className='mb-5' style={{ overflowX: 'scroll' }} >
      <ul className="pagination ">
        <li className="page-item">
          <a className="page-link" href="/#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        {items}

        <li className="page-item">
          <a className="page-link" href="/#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NewPage
