document.addEventListener("DOMContentLoaded", function () {
    const prayers = {
        "morning-text": "Lord I come, I confess Bowing Lord I come, I confessBowing here, I find my restWithout You, I fall apartYou re the one that guides my heart Lord, I need You, oh, I need You Every hour, I need You My one defense, my righteousness Oh God, how I need You Where sin runs deep, Your grace is more Where grace is found is where You are And where You are, Lord, I am free Holiness is Christ in me Lord, I need You, oh, I need You Every hour, I need Youm My one defense, my righteousness Oh God, how I need You So teach my song to rise to You When temptation comes my way And when I cannot stand, I'll fall on You Jesus, You're my hope and stay Lord, I need You, oh, I need You Every hour, I need You My one defense, my righteousness Oh God, how I need You You're my one defense, my righteousness Oh God, how I need You My one defense, my righteousness Oh God, how I need You",
        "Anthem-text": "With hearts so bold, we stand as one,Guided by truth, our journey begun.Through halls of wisdom, dreams take flight, Shining with knowledge, hope, and light.We rise with honor, strong and free, Bound by love and unity. In learning’s glow, we strive each day,To lead with kindness, show the way.Our voices echo, proud and true,With faith and courage in all we do.Hand in hand, we build, we grow,Seeds of greatness we shall sow.Oh,ST.XAVIER'S, our guiding star,You shape who we truly are.Forever faithful, standing tall,With love and pride, we give our all.Let wisdom guide, let courage shine,Together strong, your light divine.For knowledge, honor, truth, and grace,In our hearts, you hold a place.",
        "evening-text": "Heavenly Father,As the sun sets and this school day comes to an end, we bow before You with hearts full of gratitude. Thank You for guiding us through the lessons we learned, the support and uplift one another. Keep our families safe and shower them with Your peace and love.As we leave school and return home, we ask for Your protection through the night. Grant us rest, refresh our minds, and prepare us for a new day filled with learning and growth. May we always walk in Your light, seeking truth, wisdom, and goodness in all that we do.Thank You, Lord, for Your constant presence in our lives. We place our trust in You today and always.Amen."
    };

    function typeEffect(elementId, text, speed) {
        let i = 0;
        function type() {
            if (i < text.length) {
                document.getElementById(elementId).innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    typeEffect("morning-text", prayers["morning-text"], 20);
    typeEffect("Anthem-text", prayers["Anthem-text"], 20);
    typeEffect("evening-text", prayers["evening-text"], 20);
});