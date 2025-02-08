
interface ApplicationModalProps {
    toggleModalVisibility: () => void;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({toggleModalVisibility}) => {
    return (
        <div className="backdrop">
            <div className="a__modal py-3 px-3">
                <form action="/">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="text" placeholder="Portfolio Link" />
                    <textarea name="cover_letter" id="cover_letter" rows={10} placeholder="Cover Letter"></textarea>
                    <div className="file-upload-container w-100 mb-4">
                        <label htmlFor="resume" className="file-upload-label">
                            Upload Resume <small>(max. of 10mb)</small>
                        </label>
                        <input type="file" name="resume" id="resume" className="file-upload-input" />
                    </div>
                    <button type="submit" className="w-100">Submit Application</button>
                </form>
                <p className="cancel py-3" onClick={toggleModalVisibility}>
                    Cancel
                </p>
            </div>
        </div>
    )
}

export default ApplicationModal;