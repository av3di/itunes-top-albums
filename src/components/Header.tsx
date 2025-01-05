import Headphones from "./Headphones";

function Header() {
    return (<header>
        <div className="row justify-content-between">
          <h1 className="col-auto text-left my-5 rubik-vinyl-regular">iTunes Top 100 Albums</h1>
          <div className="col logo row align-items-center d-none d-sm-flex">
            <Headphones />
          </div>
        </div>
      </header>
    );
}

export default Header;