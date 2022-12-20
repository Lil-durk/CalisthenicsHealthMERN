import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn,
  } from "mdb-react-ui-kit";


const homeFooter = {
    marginTop: "10%",
    position: "absolute",
    alignItems: "center",
    textAlign: "center",
    bottom: 0,
    left: "35%",
    width: "30%",
    backgroundColor: "white",
  };
  
  const footerIcons = {
    borderRadius: "50%",
  };

export default function Footer() {
  return (
    <MDBContainer style={homeFooter} className="p-3 pb-0">
      <section className="mb-3">
        <MDBBtn
          style={footerIcons}
          outline
          color="dark"
          floating
          className="m-1"
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="facebook-f" />
        </MDBBtn>

        <MDBBtn
          style={footerIcons}
          outline
          color="dark"
          floating
          className="m-1"
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="twitter" />
        </MDBBtn>

        <MDBBtn
          style={footerIcons}
          outline
          color="dark"
          floating
          className="m-1"
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="google" />
        </MDBBtn>
        <MDBBtn
          style={footerIcons}
          outline
          color="dark"
          floating
          className="m-1"
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="instagram" />
        </MDBBtn>

        <MDBBtn
          style={footerIcons}
          outline
          color="dark"
          floating
          className="m-1"
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="linkedin-in" />
        </MDBBtn>

        <MDBBtn
          style={footerIcons}
          outline
          color="dark"
          floating
          className="m-1"
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="github" />
        </MDBBtn>
      </section>
    </MDBContainer>
  );
}
