function calculate() {
    let age = Number(document.querySelector('input[name="age"]').value);
    let job = document.querySelector('select[name="job"]').value;
    let education = document.querySelector('select[name="education"]').value;
    let visaType = document.querySelector('select[name="visaType"]').value;
    let finance = Number(document.querySelector('input[name="finance"]').value);
    let family = document.querySelector('input[name="family"]:checked').value;
    let history = document.querySelector('input[name="history"]:checked').value;
    let purpose = document.querySelector('select[name="purpose"]').value;

    let score = 50; // 基础分

    // 年龄评分
    if(age < 30) score += 10;
    else if(age <= 50) score += 5;
    else score += 2;

    // 职业评分
    if(job === "stable") score += 10;
    else if(job === "general") score += 5;

    // 教育评分
    if(education === "phd") score += 15;
    else if(education === "bachelor") score += 10;
    else score += 5;

    // 签证类型评分
    if(visaType === "student") score += 10;
    else if(visaType === "tourist") score += 5;
    else if(visaType === "work") score += 15;

    // 财务评分
    if(finance > 50) score += 15;
    else if(finance >= 20) score += 10;
    else score += 5;

    // 家庭关系
    if(family === "yes") score += 10;

    // 出入境记录
    if(history === "clean") score += 10;
    else score -= 10;

    // 赴美目的
    if(purpose === "study") score += 10;
    else if(purpose === "tourism") score += 5;
    else if(purpose === "family") score += 8;
    else if(purpose === "business") score += 7;

    if(score > 100) score = 100;
    if(score < 0) score = 0;

    document.getElementById('result').innerText = "通过率: " + score + "%";
}