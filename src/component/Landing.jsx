import React from "react";
import './Landing.css'

const Landing = () => {
    return(
        <div class="grid">
            <header class="page-header">
                <div class="content">
                    <p style={{paddingBottom: '10px'}}>About Sukses Jaya Auto</p>
                    <span style={{fontWeight:'normal', textAlign:'right'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe ea totam ipsum esse reprehenderit minima harum blanditiis! Perferendis quam dolorum corrupti necessitatibus nihil quae quos reprehenderit cumque aut et. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam odio laboriosam architecto totam quidem placeat quasi perferendis esse labore doloribus, rem eveniet. Tempore laboriosam fugit mollitia velit alias reiciendis officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus, ut earum ipsum commodi incidunt magni, quia obcaecati eveniet ex labore exercitationem maiores dolore distinctio, alias quidem culpa animi deserunt. </span>
                </div>
                
            </header>

            <aside class="page-leftbar">
                <div class="content">
                    <p>Leftbar</p>
                </div>
            </aside>

            <main class="page-main">
                <div class="content">
                    <p>Main</p>
                </div>
            </main>

            <footer class="page-footer">
                <div class="content">
                    <p>Footer</p>
                </div>
            </footer>
        </div>
    )
}

export default Landing