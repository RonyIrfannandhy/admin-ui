
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Mydatatable from "../../components/mydatatable/MyDatatable";
import "./mylist.scss";


const Mylistdata = () => {
    return (
        <div className="mylistdata">
            <Sidebar />
            <div className="mylistdataContainer">
                <Navbar />
                <div className="widget">
                    <Widget type="user" />
                    <Widget type="product" />
                    <Widget type="category" />

                </div>
                <div className="mydatatable"></div>
                <Mydatatable />


            </div>
        </div>
    );
};

export default Mylistdata;