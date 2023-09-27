import React from 'react'
import HTMLTORtfBrowser from 'html-to-rtf-browser'
import Buffer from 'buffer'
const HtmlToRtf = () => {
    const GenerateRtf = () => {
        var htmlToBrowser = new HTMLTORtfBrowser()
        let html = document.getElementById('maindiv')
        window.Buffer = window.Buffer || require('buffer').Buffer
        alert(html?.outerHTML)
        let rtf = htmlToBrowser.convertHtmlToRtf(html?.outerHTML)
        console.log(rtf, "8....")
        const blob = new Blob([rtf], { type: "application/rtf;charset=utf-8" })
        const url = window.URL.createObjectURL(blob)
        window.location.href = url
        // const a = document.createElement('a')
        // a.href = url
        // a.download = 'document.rtf'
        // a.click()
        // url.revokeObjectURL(url)



    }
    return (
        <div>

            <div id={'maindiv'}>
                <table className='table-bordered table'>
                    <thead>

                        <tr>
                            <th> Header1</th>
                            <th >Header2</th>
                            <th colSpan={3}>Header3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={1}><span>data1</span><br /> <span>data2</span> <br /><span>data3</span></td>
                            <td colSpan={1}>data2</td>
                            <td colSpan={1}>data3</td>
                            <td colSpan={1}>data4</td>
                            <td colSpan={1}>data5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button onClick={() => { GenerateRtf() }}> Generate Tlf</button>
        </div>
    )
}
export default HtmlToRtf