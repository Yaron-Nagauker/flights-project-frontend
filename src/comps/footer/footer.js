

import React from 'react'
import './footer.css'

export default function footer() {
    return (
        <div>
            <footer className="footer">
                <div className="content has-text-centered">
                    <div>
                        <p>2021 Fullstack course completion project. <a className='has-text-primary' href='https://www.int-college.co.il/'>INT COLLEGE.</a> presented by: Yaron Nagauker</p>
                        <strong className='has-text-primary'>Bulma</strong> by <a className='has-text-primary' href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                        <a className='has-text-primary' href="http://opensource.org/licenses/mit-license.php">MIT</a>. 
                    </div>
                </div>
            </footer>
        </div>
    )
}
