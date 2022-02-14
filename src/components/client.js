import React from 'react'
function Client({ data }) {
    return (
        <div className="filterRow">
            <h4>
                {data.user_full_name}
            </h4>
            <div className="rowDetail">
                <span>
                    <span><i className="fa-solid fa-phone"></i>  <span className='showMobile'>Phone</span></span>
                    <b>{data.user_phone}</b>
                </span>
                <span>
                    @{data.user_name}
                </span>
                <span>
                    <span><i className="fa-solid fa-file-contract"></i> Policy No.</span>
                    <span>{data.user_policy} | {data.user_policy_copy}</span>
                </span>
            </div>
        </div>
    )
}

export const MemoizedClient = React.memo(Client);