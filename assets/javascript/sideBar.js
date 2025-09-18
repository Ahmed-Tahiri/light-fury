let accountSettingBtn = document.getElementById('myAccountBtn');
let systemSettingBtn = document.getElementById('SystemBtn');
let accountSection = document.getElementById('profileSetting');
let systemSection = document.getElementById('systemSetting');
let settingBtn = document.querySelector('.settingBtn');
let settingBtn2 = document.querySelector('#systemSettingBtn2');
let sideBar = document.querySelector('.sideBar');
settingBtn.addEventListener('click', () => {
    sideBar.style.zIndex = '999999';

});
settingBtn2.addEventListener('click', () => {
    sideBar.style.zIndex = '999999';

});
systemSection.classList.add('none');
accountSection.classList.add('flex');
accountSettingBtn.addEventListener('click', () => {
    systemSection.style.zIndex = '100';
    systemSection.classList.remove('flex');
    accountSection.classList.add('flex');
    accountSection.style.zIndex = '101';
    sideBar.style.zIndex = '99';
});
systemSettingBtn.addEventListener('click', () => {
    accountSection.style.zIndex = '100';
    accountSection.classList.remove('flex');
    systemSection.classList.add('flex');
    systemSection.style.zIndex = '101';
    sideBar.style.zIndex = '99';
});



