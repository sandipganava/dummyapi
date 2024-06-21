

  const express = require('express');
  const router = express.Router();
  const userController = require('../controller/userController');

  // router.get('/users', userController.getAllUsers);
  // router.post('/user', userController.addUsers);
  // router.get('/user/:id', userController.getUser);
  // router.put('/user/:id', userController.updateUser);
  // router.delete('/user/:id', userController.deleteUser);
  const checkApiKey = (req, res, next) => {
    const apiKeyHeader = req.headers["x-api-key"];
    if (!apiKeyHeader || apiKeyHeader !== apiKey) {
      res.status(403).json({ Error: "Forbidden" });
    } else {
      next();
    }
  };
  
router.post('/register', userController.register);
router.post('/login', userController.login);
// user login 
router.post('/userlogin', userController.userlogin);
router.post('/adduser', userController.adduser);
router.post('/user_register', userController.user_register);
router.post('/profile_image/:id', userController.profile_image);
router.post('/profile_banner/:id',  userController.profile_banner);

router.post('/search', checkApiKey, userController.search);
router.post('/villagebyuser', checkApiKey, userController.villageByUser);
router.post('/addchildUser/:id', userController.addchildUser);
router.post('/addfamily/:id', userController.addfamily);
router.get('/user-list',  userController.user_list); // for app site listing
router.get('/user_listing',  userController.user_listing); // for admin site listing
router.get('/all-user', userController.all_user);
router.get('/admin-list', userController.admin_list);
router.post('/admin-delete/:id', userController.admin_delete);
router.get('/admin-edit/:id', userController.admin_edit);

//child maintain 
router.get('/add_childUser/:id', userController.add_childUser);

router.post('/admin-update/:id', userController.admin_update);
router.get('/user-edit/:id', userController.user_edit);
router.get('/childuser-edit/:id', userController.childuser_edit);
router.post('/child_update/:id', userController.child_update);
router.post('/user-update/:id', userController.user_update);
router.post('/update-email/:id', userController.update_email);
router.post('/user-delete/:id', userController.user_delete);
router.get('/viewUser/:id', userController.viewUser);
router.get('/viewchildUser/:id', userController.viewchildUser);

router.post('/send-otp', userController.forgetpass);
router.post('/check-otp', userController.checkOtp);
router.post('/forgetpassword/:id', userController.updatePassword);

router.post('/postpassword/:id', userController.postpassword);
router.post('/change_password', userController.change_password);
router.post('/password_change', userController.change_user_password);

router.post('/contactus', userController.Contactus);
router.get('/contactus', userController.listcontact);
router.get('/contact-delete', userController.deleteContact);

router.get('/locationdata', userController.locationdata);
router.post('/location', userController.location);
router.get('/location', userController.listlocation);
router.get('/location-edit/:id', userController.location_edit);
router.post('/location-edit/:id', userController.location_update);
router.post('/location-delete/:id', userController.location_delete);

router.post('/aboutus', userController.aboutus);
router.get('/aboutus',  userController.listaboutus);
router.post('/delete_aboutus/:id', userController.delete_aboutus);
router.get('/aboutus-edit/:id', userController.aboutus_edit);
router.post('/aboutus-edit/:id', userController.aboutus_update);


router.post('/committee_members', userController.CommitteeMembers);
router.get('/committee_members', userController.listCommitteeMembers);
router.post('/delete_committee_members/:id', userController.delete_CommitteeMembers);
router.get('/committee_members-edit/:id', userController.CommitteeMembers_edit);
router.post('/committeemembers-edit/:id', userController.CommitteeMembers_update);

router.post('/slider', userController.slider);
router.get('/slider', userController.listslider);
router.post('/delete_slider/:id', userController.delete_slider);

router.get('/listsettings', userController.listsettings);
router.post('/createSetting', userController.createSetting);
router.get('/editSetting/:id', userController.editSetting);
router.post('/editSetting/:id', userController.updateSetting);
router.post('/deleteSetting/:id', userController.deleteSetting);

router.post('/payment', userController.payment);
router.get('/payment', userController.getpayment);
// router.get('/paymentreceipt', userController.getpaymentreceipt);


router.post('/order', userController.order);

router.get('/paymentReceipt/:id', userController.paymentReceipt);
router.get('/Allpayment', userController.AllpaymentData);
router.get('/download', userController.download);
router.get('/test', userController.test);
router.post('/changePassword', userController.changePassword);
router.get('/relationship-data', userController.relationship);
router.post('/check_mobile', userController.checkMobileNo);

//  news API
router.get('/news', userController.news);
router.post('/news', userController.newsPost);
router.get('/news-edit/:id', userController.news_edit);
router.post('/news-edit/:id', userController.news_update);
router.post('/news-delete/:id', userController.news_delete);
router.get('/notification/:id', userController.notification);
// router.post('/send-otp', userController.send_otp)
// router.post('/verify-otp', userController.verify_otp)

router.get('/userroot', userController.userroot);
// family free
router.get('/familyData/:id', userController.childData);
router.get('/userList/:id', userController.userList);

router.get('/updateDatatypes', userController.updateDatatypes);

router.get('/faq', userController.getfaq);
router.post('/faq', userController.createfaq);
router.get('/faq-edit/:id', userController.editfaq);
router.post('/faq-edit/:id', userController.updatefaq);
router.post('/faq-delete/:id', userController.deletefaq);

router.post('/email_support', userController.email_support);
router.get('/email_support', userController.getemail_support);


// joinpage data for app
router.get('/joinpage', userController.joinpage);
router.post('/createjoinpage', userController.createjoinpage);
router.get('/editjoinpage/:id', userController.editjoinpage);
router.post('/editjoinpage/:id', userController.updatejoinpage);
router.post('/deletejoinpage/:id', userController.deletejoinpage);

  module.exports = router;
  