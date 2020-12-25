import Navbar from '../components/Navbar';
import SeeMore from '../components/SeeMore';
import SecondaryContainer from '../components/SecondaryContainer';
import Button from '../components/Button.js';
import DescriptionP from '../components/DescriptionP';





import mainGirl from '../assets/main-girl.png';
import Main from '../components/Main';



const MainHTML = props => {
    return (
        <>

            <Main>

                <section className="left">
                    <SecondaryContainer>
                        <div className="title">
                            <h1>Bring <br /> Dreams <br /> True</h1>
                        </div>
                        <DescriptionP width='312px' fontSize="2rem" >
                            It is a long established fact that a reader will be distracted by the readable content of a page
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        </DescriptionP>
                        <div className="buttons">

                            <Button type='primary-button' text='BUY NOW' />
                            <Button type='secondary-button' text='SUBSCRIBE' />

                        </div>

                        <SeeMore />
                    </ SecondaryContainer>

                </section>{/* Left End */}

                <section className="right">
                    <object className='main-girl' data={mainGirl} type="image/png">hi</object>

                </section>
            </Main>{/* .main End */}
        </>
    )
}


export default MainHTML;