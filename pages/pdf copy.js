import Router from 'next/router'
import { useRouter } from 'next/router'


import fetch from 'isomorphic-unfetch'
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

import eventFire from '../functions/eventFire'

export default class App extends React.Component {
  pdfExportComponent;
  static async getInitialProps({ query: { pid = 0 } }) {
    const r = await fetch(
      `https://hydro.server8.turnkeydigital.dev/wp-json/wp/v2/test/${pid}`
    )
    const p = await r.json()
    return {
      post: p,
      pid:pid
    }
  }

  print() {
    eventFire(document.getElementById('mytest1'), 'click');
  }


  componentDidMount() {
    this.print()
  }

  render() {
    return (
      <div>

        <PDFExport ref={(component) => this.pdfExportComponent = component} paperSize="A4">
          <div>
            <h1>Post ID: {this.props.pid} </h1>
            <p>ACF Test field: {this.props.post.acf.acf_test_field}</p>
          </div>
        </PDFExport>

        <button 
          id="mytest1" 
          className="k-button" 
          onClick={this.exportPDFWithComponent}
        >
            Export with component
        </button>
      </div>
    )
  }
  
  exportPDFWithComponent = () => {
    this.pdfExportComponent.save();
  }
}
