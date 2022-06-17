import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./editp.scss";

const Editp = ({ inputs, title }) => {
    return (
    <div className="edit">
      <Sidebar />
      <div className="editContainer">
        <Navbar />
        <div className="top">
          <h1>Edit data provinsi</h1>
        </div>
        <div className="bottom">
            <form>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
              <button>Delete</button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Editp;