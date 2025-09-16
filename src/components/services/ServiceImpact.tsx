const ServiceImpact = () => {
    return (
        <div className="service__impact">
            <div className="service__impact__left d-flex flex-column gap-3">
                <h2 className="reveal__text">
                    Design that works,
                    <br /> <span className="purple">Beautifully.</span>
                </h2>
                <p className="big fade__text">
                    We go beyond aesthetics. Our website design process focuses
                    on creating a strong visual hierarchy, intuitive navigation,
                    and clear focal points that guide your users and achieve
                    your business objectives. We ensure your website isn't just
                    seen, but experienced.
                </p>
            </div>
            <div className="service__impact__right">
                <div className="service__impact__right__item">
                    <div className="d-flex flex-column gap-2 p-4">
                        <h4>85%</h4>
                        <p className="big">Customer satisfaction rate</p>
                    </div>
                    <div className="d-flex flex-column gap-2 p-4">
                        <h4>50+</h4>
                        <p className="big">Projects launches</p>
                    </div>
                    <div className="d-flex flex-column gap-2 p-4">
                        <h4>20+</h4>
                        <p className="big">Team members</p>
                    </div>
                    <div className="d-flex flex-column gap-2 p-4">
                        <h4>20%</h4>
                        <p className="big">Clients worked with</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceImpact;
