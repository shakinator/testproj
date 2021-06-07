import React from 'react';
import "./Home.css";
import "./Product.js";
import Product from './Product.js';

function Home() {
    return (
        <div className="home">
            <div className="home__container">

                <div className="home__row">
                <Product title="Product 1" price={99.99}
                image="https://th.bing.com/th/id/OIP.2xi--GXNKK1HMDTZM9J_WwHaMA?pid=ImgDet&rs=1"
                />
                <Product
                id="49538094"
                title="Product 2"
                price={99.99}
                
                image="https://th.bing.com/th/id/OIP.Cqnw-avvvn5N4L2kwomKdgAAAA?pid=ImgDet&rs=1"
                />
                </div>
                <div className="home__row">
                <Product
                id="4903850"
                title="Product 3"
                price={99.99}
                image="https://www.verdict.co.uk/wp-content/uploads/2018/03/c6de6-briefhistorytime5.jpg"
                />
                <Product
                id="23445930"
                title="Product 4"
                price={99.99}
                image="https://th.bing.com/th/id/R4bcfe11ee83688090be4e908b8ea2780?rik=Is%2fQ%2fIm%2b99KFOw&riu=http%3a%2f%2fimg1.imagesbn.com%2fp%2f9780307417848_p0_v1_s260x420.JPG&ehk=5VmqyyXC5KefKpnnaiYiWgeSe4OXDaD%2fw2KpEdzIOaY%3d&risl=&pid=ImgRaw"
                />
                <Product
                id="3254354345"
                title="Product5"
                price={99.99}
                image="https://th.bing.com/th/id/Rae86aa1505e209e00ac183637fb3e32d?rik=2IV88yMUb03zQw&riu=http%3a%2f%2fimages.gr-assets.com%2fbooks%2f1386852938l%2f603254.jpg&ehk=na9CqXKz3yoI0fvMH0uQllhIUt8XbaK%2bMQAzuccOPDQ%3d&risl=&pid=ImgRaw"
                />
                </div>
            </div>
        </div>
    )
}

export default Home
