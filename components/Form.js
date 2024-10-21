// Custom Components
import Text from '../components/form/Text'
import TextArea from '../components/form/TextArea'

function Contact_Us(formJSON) {
    return (
        <div>
            <form action="https://hydrosilintl.com/wp-json/frm/v2/forms/1/entries" method="POST">
                {formJSON.formJSON.map((meta, index) => (
                    (
                        meta.type == "text" ? 
                            <Text meta={meta} /> :
                            meta.type == "email" ?
                                <Text meta={meta} /> : 
                                meta.type == "textarea" ?
                                    <TextArea meta={meta} /> :
                                        console.log('Must create new component, and link to Form.js')
                    )
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default Contact_Us;
