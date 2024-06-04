import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/datatable/Datatable";

const Single = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left"><div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img
                                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">Rony Irfannandhy</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">ronyirfan2002@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+62 5875 0289 58</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">
                                        Semarang, BSB City
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">Indonesia</span>
                                </div>
                            </div>
                        </div>
                    </div></div>
                    <div className="right"><div className="right">
                        <Chart aspect={3 / 1} type="order" />
                    </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="bottom">
                        <h1 className="title">Last Transactions</h1>
                        <List />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Single;