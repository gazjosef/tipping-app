import React from 'react';
import "./Settings.css"

export const Settings = () => {
    return (
        <section id="settings">
            {/* <!-- Profile Settings--> */}
            <div className="col-lg-8 pb-5">
                <h3>Settings</h3>
                <form className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="account-fn">First Name</label>
                            <input className="form-control" type="text" id="account-fn" value="Daniel" required="" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="account-ln">Last Name</label>
                            <input className="form-control" type="text" id="account-ln" value="Adams" required="" />
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="account-email">E-mail Address</label>
                            <input className="form-control" type="email" id="account-email" value="daniel.adams@example.com" disabled="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="account-phone">Phone Number</label>
                            <input className="form-control" type="text" id="account-phone" value="+7 (805) 348 95 72" required="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="account-pass">New Password</label>
                            <input className="form-control" type="password" id="account-pass" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="account-confirm-pass">Confirm Password</label>
                            <input className="form-control" type="password" id="account-confirm-pass" />
                        </div>
                    </div>
                    <div className="col-12">
                        {/* <hr className="mt-2 mb-3" /> */}
                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                            <div className="custom-control custom-checkbox d-block">
                                {/* <input className="custom-control-input" type="checkbox" id="subscribe_me" checked="" />
                                <label className="custom-control-label" htmlFor="subscribe_me">Subscribe me to Newsletter</label> */}
                            </div>
                            <button className="btn btn-style-1 btn-primary btn-settings" type="button" data-toast="" data-toast-position="topRight" data-toast-type="success" data-toast-icon="fe-icon-check-circle" data-toast-title="Success!" data-toast-message="Your profile updated successfuly.">Update Profile</button>
                        </div>
                    </div>
                </form>

            </div>

        </section>

    )
}
