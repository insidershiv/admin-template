import React from 'react'

const CardComponent = ({ title, count, img }) => {
    return (
        <div className="card text-white bg-primary" style={{ borderRadius: '1rem' }}>
            <div className="card-body" >
                <div className="row d-flex justify-content-between p-1">
                    <div>
                        {count}
                    </div>
                    <div>
                        {img}
                    </div>
                </div>
                <div className="row mt-2 p-1">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default CardComponent