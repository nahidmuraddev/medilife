import React, { useEffect, useState } from 'react';
import AboutNavBarFooter from './AboutNavBarFooter';
import AboutNaveBarHeader from './AboutNaveBarHeader';
import { NavLink } from "react-router-dom";
const AccountDetails = () => {

    const [file, setFile] = useState();  

     
     
    function handleChange(e) {
    console.log(e.target.files[0]);
    
    // setFile(URL.createObjectURL(e.target.files[0]));
   const a =  localStorage.setItem('fileVimage', (e.target.files[0]));

    
  };

    return (
        <>
       <AboutNaveBarHeader></AboutNaveBarHeader>
      

            

       {/*  <!-- BREADCRUMB AREA START --> */}
    <div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image "  style={{  
  backgroundImage: "url(" + "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/bg/14.jpg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__breadcrumb-inner">
                        <h1 className="page-title">Account</h1>
                        <div className="ltn__breadcrumb-list">
                            <ul>
                                <li><NavLink to="/"><span className="ltn__secondary-color"><i className="fas fa-home"></i></span> Home</NavLink></li>
                                <li>My Account</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  <!-- BREADCRUMB AREA END --> */}

    {/* <!-- WISHLIST AREA START --> */}
    <div className="liton__wishlist-area pb-70">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/* <!-- PRODUCT TAB AREA START --> */}
                    <div className="ltn__product-tab-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="ltn__tab-menu-list mb-50">
                                        <div className="nav">
                                            <a className="active show" data-bs-toggle="tab" href="#liton_tab_1_1">Dashboard <i className="fas fa-home"></i></a>
                                            <a data-bs-toggle="tab" href="#liton_tab_1_2">Orders <i className="fas fa-file-alt"></i></a>
                                            <a data-bs-toggle="tab" href="#liton_tab_1_3">Downloads <i className="fas fa-arrow-down"></i></a>
                                            <a data-bs-toggle="tab" href="#liton_tab_1_4">address <i className="fas fa-map-marker-alt"></i></a>
                                            <a data-bs-toggle="tab" href="#liton_tab_1_5">Account Details <i className="fas fa-user"></i></a>
                                            <a href="login.html">Logout <i className="fas fa-sign-out-alt"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="tab-content">
                                        <div className="tab-pane fade active show" id="liton_tab_1_1">
                                            <div className="ltn__myaccount-tab-content-inner">
                                                <p>Hello <strong>UserName</strong> (not <strong>UserName</strong>? <small><a href="login-register.html">Log out</a></small> )</p>
                                                <p>From your account dashboard you can view your <span>recent orders</span>, manage your <span>shipping and billing addresses</span>, and <span>edit your password and account details</span>.</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="liton_tab_1_2">
                                            <div className="ltn__myaccount-tab-content-inner">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Order</th>
                                                                <th>Date</th>
                                                                <th>Status</th>
                                                                <th>Total</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Jun 22, 2019</td>
                                                                <td>Pending</td>
                                                                <td>$3000</td>
                                                                <td><a href="cart.html">View</a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Nov 22, 2019</td>
                                                                <td>Approved</td>
                                                                <td>$200</td>
                                                                <td><a href="cart.html">View</a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>Jan 12, 2020</td>
                                                                <td>On Hold</td>
                                                                <td>$990</td>
                                                                <td><a href="cart.html">View</a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="liton_tab_1_3">
                                            <div className="ltn__myaccount-tab-content-inner">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Product</th>
                                                                <th>Date</th>
                                                                <th>Expire</th>
                                                                <th>Download</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Carsafe - Car Service PSD Template</td>
                                                                <td>Nov 22, 2020</td>
                                                                <td>Yes</td>
                                                                <td><a href="#"><i className="far fa-arrow-to-bottom mr-1"></i> Download File</a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Carsafe - Car Service HTML Template</td>
                                                                <td>Nov 10, 2020</td>
                                                                <td>Yes</td>
                                                                <td><a href="#"><i className="far fa-arrow-to-bottom mr-1"></i> Download File</a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Carsafe - Car Service WordPress Theme</td>
                                                                <td>Nov 12, 2020</td>
                                                                <td>Yes</td>
                                                                <td><a href="#"><i className="far fa-arrow-to-bottom mr-1"></i> Download File</a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="liton_tab_1_4">
                                            <div className="ltn__myaccount-tab-content-inner">
                                                <p>The following addresses will be used on the checkout page by default.</p>
                                                <div className="row">
                                                    <div className="col-md-6 col-12 learts-mb-30">
                                                        <h4>Billing Address <small><a href="#">edit</a></small></h4>
                                                        <address>
                                                            <p><strong>Alex Tuntuni</strong></p>
                                                            <p>1355 Market St, Suite 900 <br/>
                                                                San Francisco, CA 94103</p>
                                                            <p>Mobile: (123) 456-7890</p>
                                                        </address>
                                                    </div>
                                                    <div className="col-md-6 col-12 learts-mb-30">
                                                        <h4>Shipping Address <small><a href="#">edit</a></small></h4>
                                                        <address>
                                                            <p><strong>Alex Tuntuni</strong></p>
                                                            <p>1355 Market St, Suite 900 <br/>
                                                                San Francisco, CA 94103</p>
                                                            <p>Mobile: (123) 456-7890</p>
                                                        </address>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="liton_tab_1_5">
                                            <div className="ltn__myaccount-tab-content-inner">
                                                <p>The following addresses will be used on the checkout page by default.</p>
                                                <div className="ltn__form-box">
                                                    <form action="#">
                                                        <div className="row mb-50">
                                                            <div className="col-md-6">
                                                                <label>First name:</label>
                                                                <input type="text" name="ltn__name"/>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label>Last name:</label>
                                                                <input type="text" name="ltn__lastname"/>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label>Display Name:</label>
                                                                <input type="text" name="ltn__lastname" placeholder="Ethan"/>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label>Display Email:</label>
                                                                <input type="email" name="ltn__lastname" placeholder="example@example.com"/>
                                                            </div>


                                                            <div className="col-md-6">
                                                             <label>Add Profile Image:</label>
                                                             <input type="file" onChange={handleChange} name="file"/>
                                                             {/* <img src={file} style={{width:"200px", borderRadius: "0%"}}/> */}
                                                            </div>

                                                        </div>
                                                        <fieldset>
                                                            <legend>Password change</legend>
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <label>Current password (leave blank to leave unchanged):</label>
                                                                    <input type="password" name="ltn__name"/>
                                                                    <label>New password (leave blank to leave unchanged):</label>
                                                                    <input type="password" name="ltn__lastname"/>
                                                                    <label>Confirm new password:</label>
                                                                    <input type="password" name="ltn__lastname"/>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                        <div className="btn-wrapper">
                                                            <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase">Save Changes</button>
                                                        </div>

                                                        <>
                                                        
                                                        
                                                        </>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- PRODUCT TAB AREA END --> */}
                </div>
            </div>
        </div>
    </div>
    {/* <!-- WISHLIST AREA START --> */}


     {/*  <!-- CALL TO ACTION START (call-to-action-6) --> */}
     <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom" data-bs-bg="img/1.jpg--">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
                        <div className="coll-to-info text-color-white">
                            <h1>Buy medical disposable face mask <br/> to protect your loved ones</h1>
                        </div>
                        <div className="btn-wrapper">
                            <a className="btn btn-effect-3 btn-white" href="shop.html">Explore Products <i className="icon-next"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  <!-- CALL TO ACTION END --> */}

       <AboutNavBarFooter></AboutNavBarFooter>
        </>
    );
};

export default AccountDetails;