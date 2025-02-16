export function levelTitle(level) {
    switch (true) {
        case level >= 60:
            return "Full-Stack\ndeveloper";
        case level >= 55:
            return "Confirmed developer";
        case level >= 50:
            return "Junior developer";
        case level >= 40:
            return "Basic developer";
        case level >= 30:
            return "Assistant\ndeveloper";
        case level >= 20:
            return "Apprentice developer";
        case level >= 10:
            return "Beginner developer";
        default:
            return "Aspiring developer";
    }
}

export function auditRatioFixedValue(nb) {
    const aftercomma = String(nb).split('.')[1];
    if (!aftercomma) return nb

    const workingOnNbr = parseInt(aftercomma) / Math.pow(10, aftercomma.length - 1);

    return (String(nb).split('.')[0] + '.' + String(Math.round(workingOnNbr)));
}