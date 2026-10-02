/* ==================== شعله v2 — Premium Offline Habit Engine ==================== */
const STORAGE = 'sholeh_v2';
const PIN_KEY = 'sholeh_pin_hash';
const SETTINGS_KEY = 'sholeh_settings';

// ---------- 30 Languages ----------
const LANGS = {
  fa:{name:'فارسی',dir:'rtl',t:{
    appName:'شعله',tagline:'عادت‌هات رو روشن نگه دار',streakLabel:'روز شعله',
    active:'عادت فعال',todayDone:'انجام امروز',habits:'عادت‌ها',fitness:'ورزش',stats:'آمار',
    habitsToday:'عادت‌های امروز',newBtn:'جدید',emptyTitle:'شعله هنوز روشنه نیست',emptyDesc:'اولین عادت‌ت رو بساز',
    fitTitle:'تمرین‌های امروز',logBtn:'ثبت',emptyFitTitle:'هنوز تمرینی ثبت نشده',emptyFitDesc:'اولین ست‌ت رو بزن',
    progress:'پیشرفت تو',week:'۷ روز اخیر',topHabits:'قوی‌ترین عادت‌ها',totalFlames:'کل شعله‌ها',totalWorkouts:'تمرین ثبت‌شده',
    settings:'تنظیمات',lang:'زبان',theme:'تم',notif:'یادآوری‌ها',notifDesc:'اعلان بالای صفحه + نوتیفیکیشن',
    security:'امنیت',pinDesc:'قفل با کد عبور (PIN)',data:'داده و پشتیبان',export:'خروجی',import:'ورودی',clear:'پاک کردن',
    about:'شعله v2 — کاملاً آفلاین و امن',habitNew:'عادت جدید',habitName:'اسم عادت',icon:'آیکون',color:'رنگ شعله',
    target:'هدف روزانه',optional:'(اختیاری)',saveHabit:'روشن کردن شعله 🔥',workoutNew:'ثبت تمرین',workoutName:'اسم تمرین',
    sets:'ست',reps:'تکرار',duration:'مدت (دقیقه)',notes:'یادداشت',saveWorkout:'ثبت تمرین 💪',
    lockTitle:'قفل شعله',lockSub:'کد عبور را وارد کنید',reminder:'یادآوری',
    toastDone:'شعله روشن شد! 🔥',toastAdded:'شعله جدید روشن شد 🔥',toastWorkout:'تمرین ثبت شد 💪',
    toastExport:'پشتیبان دانلود شد',toastImport:'داده‌ها وارد شد',toastClear:'همه داده‌ها پاک شد',toastPin:'PIN ذخیره شد',
    toastPinErr:'کد اشتباه است',confirmClear:'همه داده‌ها برای همیشه پاک شود؟',confirmDel:'این عادت حذف شود؟',
    start:'شروع کن',motivation:['امروز روز ساختنشه ✨','شعله کوچیک، آتش بزرگ می‌سازه','هر تیک، یه قدم به نسخه بهتر تو','ثبات از انگیزه قوی‌تره','تو داری می‌سازی، ادامه بده 🔥']
  }},
  en:{name:'English',dir:'ltr',t:{
    appName:'Sholeh',tagline:'Keep your habits burning',streakLabel:'day streak',
    active:'Active habits',todayDone:'Done today',habits:'Habits',fitness:'Fitness',stats:'Stats',
    habitsToday:"Today's habits",newBtn:'New',emptyTitle:'No flame yet',emptyDesc:'Create your first habit',
    fitTitle:"Today's workouts",logBtn:'Log',emptyFitTitle:'No workouts yet',emptyFitDesc:'Log your first set',
    progress:'Your progress',week:'Last 7 days',topHabits:'Strongest habits',totalFlames:'Total flames',totalWorkouts:'Workouts logged',
    settings:'Settings',lang:'Language',theme:'Theme',notif:'Reminders',notifDesc:'Top banner + notifications',
    security:'Security',pinDesc:'Lock with PIN code',data:'Data & Backup',export:'Export',import:'Import',clear:'Clear all',
    about:'Sholeh v2 — Fully offline & secure',habitNew:'New habit',habitName:'Habit name',icon:'Icon',color:'Flame color',
    target:'Daily target',optional:'(optional)',saveHabit:'Light the flame 🔥',workoutNew:'Log workout',workoutName:'Exercise name',
    sets:'Sets',reps:'Reps',duration:'Duration (min)',notes:'Notes',saveWorkout:'Save workout 💪',
    lockTitle:'Sholeh Lock',lockSub:'Enter your PIN',reminder:'Reminder',
    toastDone:'Flame lit! 🔥',toastAdded:'New flame lit 🔥',toastWorkout:'Workout saved 💪',
    toastExport:'Backup downloaded',toastImport:'Data imported',toastClear:'All data cleared',toastPin:'PIN saved',
    toastPinErr:'Wrong PIN',confirmClear:'Delete all data forever?',confirmDel:'Delete this habit?',
    start:'Start',motivation:['Today is the day ✨','Small flame, big fire','Every check is progress','Consistency beats motivation','You are building — keep going 🔥']
  }},
  ar:{name:'العربية',dir:'rtl',t:{
    appName:'شعله',tagline:'أبقِ عاداتك مشتعلة',streakLabel:'يوم متتالي',active:'عادات نشطة',todayDone:'تم اليوم',
    habits:'العادات',fitness:'اللياقة',stats:'الإحصائيات',habitsToday:'عادات اليوم',newBtn:'جديد',
    emptyTitle:'لا لهب بعد',emptyDesc:'أنشئ عادتك الأولى',fitTitle:'تمارين اليوم',logBtn:'تسجيل',
    emptyFitTitle:'لا تمارين بعد',emptyFitDesc:'سجل مجموعتك الأولى',progress:'تقدمك',week:'آخر ٧ أيام',
    topHabits:'أقوى العادات',totalFlames:'إجمالي اللهب',totalWorkouts:'تمارين مسجلة',settings:'الإعدادات',
    lang:'اللغة',theme:'المظهر',notif:'التذكيرات',notifDesc:'شريط علوي + إشعارات',security:'الأمان',
    pinDesc:'قفل برمز PIN',data:'البيانات والنسخ',export:'تصدير',import:'استيراد',clear:'مسح الكل',
    about:'شعله v2 — غير متصل وآمن',habitNew:'عادة جديدة',habitName:'اسم العادة',icon:'أيقونة',color:'لون اللهب',
    target:'الهدف اليومي',optional:'(اختياري)',saveHabit:'أشعل اللهب 🔥',workoutNew:'تسجيل تمرين',workoutName:'اسم التمرين',
    sets:'مجموعات',reps:'تكرارات',duration:'المدة (دقيقة)',notes:'ملاحظات',saveWorkout:'حفظ التمرين 💪',
    lockTitle:'قفل شعله',lockSub:'أدخل رمز PIN',reminder:'تذكير',toastDone:'اشتعل اللهب! 🔥',toastAdded:'لهب جديد 🔥',
    toastWorkout:'تم حفظ التمرين 💪',toastExport:'تم التنزيل',toastImport:'تم الاستيراد',toastClear:'تم المسح',toastPin:'تم حفظ PIN',
    toastPinErr:'رمز خاطئ',confirmClear:'حذف كل البيانات؟',confirmDel:'حذف هذه العادة؟',start:'ابدأ',
    motivation:['اليوم هو اليوم ✨','لهب صغير، نار كبيرة','كل علامة تقدم','الثبات أقوى من الحافز','أنت تبني — استمر 🔥']
  }},
  es:{name:'Español',dir:'ltr',t:{
    appName:'Sholeh',tagline:'Mantén tus hábitos encendidos',streakLabel:'días seguidos',active:'Hábitos activos',todayDone:'Hecho hoy',
    habits:'Hábitos',fitness:'Fitness',stats:'Estadísticas',habitsToday:'Hábitos de hoy',newBtn:'Nuevo',
    emptyTitle:'Aún no hay llama',emptyDesc:'Crea tu primer hábito',fitTitle:'Entrenamientos de hoy',logBtn:'Registrar',
    emptyFitTitle:'Sin entrenamientos',emptyFitDesc:'Registra tu primera serie',progress:'Tu progreso',week:'Últimos 7 días',
    topHabits:'Hábitos más fuertes',totalFlames:'Llamas totales',totalWorkouts:'Entrenamientos',settings:'Ajustes',
    lang:'Idioma',theme:'Tema',notif:'Recordatorios',notifDesc:'Banner superior + notificaciones',security:'Seguridad',
    pinDesc:'Bloqueo con PIN',data:'Datos y copia',export:'Exportar',import:'Importar',clear:'Borrar todo',
    about:'Sholeh v2 — Offline y seguro',habitNew:'Nuevo hábito',habitName:'Nombre',icon:'Icono',color:'Color',
    target:'Meta diaria',optional:'(opcional)',saveHabit:'Encender llama 🔥',workoutNew:'Registrar ejercicio',workoutName:'Ejercicio',
    sets:'Series',reps:'Reps',duration:'Duración (min)',notes:'Notas',saveWorkout:'Guardar 💪',
    lockTitle:'Bloqueo Sholeh',lockSub:'Introduce tu PIN',reminder:'Recordatorio',toastDone:'¡Llama encendida! 🔥',
    toastAdded:'Nueva llama 🔥',toastWorkout:'Entrenamiento guardado 💪',toastExport:'Copia descargada',toastImport:'Datos importados',
    toastClear:'Datos borrados',toastPin:'PIN guardado',toastPinErr:'PIN incorrecto',confirmClear:'¿Borrar todos los datos?',
    confirmDel:'¿Eliminar este hábito?',start:'Empezar',motivation:['Hoy es el día ✨','Llama pequeña, gran fuego','Cada check es progreso','La constancia vence','Estás construyendo 🔥']
  }},
  fr:{name:'Français',dir:'ltr',t:{
    appName:'Sholeh',tagline:'Garde tes habitudes allumées',streakLabel:'jours de suite',active:'Habitudes actives',todayDone:"Fait aujourd'hui",
    habits:'Habitudes',fitness:'Fitness',stats:'Stats',habitsToday:"Habitudes d'aujourd'hui",newBtn:'Nouveau',
    emptyTitle:'Pas encore de flamme',emptyDesc:'Crée ta première habitude',fitTitle:"Séances d'aujourd'hui",logBtn:'Enregistrer',
    emptyFitTitle:'Pas encore de séance',emptyFitDesc:'Enregistre ta première série',progress:'Ta progression',week:'7 derniers jours',
    topHabits:'Habitudes fortes',totalFlames:'Flammes totales',totalWorkouts:'Séances',settings:'Paramètres',
    lang:'Langue',theme:'Thème',notif:'Rappels',notifDesc:'Bannière + notifications',security:'Sécurité',
    pinDesc:'Verrouillage PIN',data:'Données',export:'Exporter',import:'Importer',clear:'Tout effacer',
    about:'Sholeh v2 — Hors ligne et sécurisé',habitNew:'Nouvelle habitude',habitName:'Nom',icon:'Icône',color:'Couleur',
    target:'Objectif journalier',optional:'(optionnel)',saveHabit:'Allumer la flamme 🔥',workoutNew:'Enregistrer',workoutName:'Exercice',
    sets:'Séries',reps:'Reps',duration:'Durée (min)',notes:'Notes',saveWorkout:'Enregistrer 💪',
    lockTitle:'Verrou Sholeh',lockSub:'Entre ton PIN',reminder:'Rappel',toastDone:'Flamme allumée ! 🔥',
    toastAdded:'Nouvelle flamme 🔥',toastWorkout:'Séance enregistrée 💪',toastExport:'Sauvegarde téléchargée',toastImport:'Données importées',
    toastClear:'Données effacées',toastPin:'PIN enregistré',toastPinErr:'Mauvais PIN',confirmClear:'Effacer toutes les données ?',
    confirmDel:'Supprimer cette habitude ?',start:'Commencer',motivation:["C'est le jour ✨",'Petite flamme, grand feu','Chaque coche est un progrès','La constance gagne','Tu construis 🔥']
  }},
  de:{name:'Deutsch',dir:'ltr',t:{
    appName:'Sholeh',tagline:'Halte deine Gewohnheiten am Brennen',streakLabel:'Tage Serie',active:'Aktive Gewohnheiten',todayDone:'Heute erledigt',
    habits:'Gewohnheiten',fitness:'Fitness',stats:'Statistik',habitsToday:'Heutige Gewohnheiten',newBtn:'Neu',
    emptyTitle:'Noch keine Flamme',emptyDesc:'Erstelle deine erste Gewohnheit',fitTitle:'Heutige Workouts',logBtn:'Loggen',
    emptyFitTitle:'Noch keine Workouts',emptyFitDesc:'Logge deinen ersten Satz',progress:'Dein Fortschritt',week:'Letzte 7 Tage',
    topHabits:'Stärkste Gewohnheiten',totalFlames:'Gesamte Flammen',totalWorkouts:'Workouts',settings:'Einstellungen',
    lang:'Sprache',theme:'Design',notif:'Erinnerungen',notifDesc:'Banner + Benachrichtigungen',security:'Sicherheit',
    pinDesc:'PIN-Sperre',data:'Daten & Backup',export:'Exportieren',import:'Importieren',clear:'Alles löschen',
    about:'Sholeh v2 — Offline & sicher',habitNew:'Neue Gewohnheit',habitName:'Name',icon:'Icon',color:'Farbe',
    target:'Tagesziel',optional:'(optional)',saveHabit:'Flamme entzünden 🔥',workoutNew:'Workout loggen',workoutName:'Übung',
    sets:'Sätze',reps:'Wdh.',duration:'Dauer (Min)',notes:'Notizen',saveWorkout:'Speichern 💪',
    lockTitle:'Sholeh Sperre',lockSub:'PIN eingeben',reminder:'Erinnerung',toastDone:'Flamme entzündet! 🔥',
    toastAdded:'Neue Flamme 🔥',toastWorkout:'Workout gespeichert 💪',toastExport:'Backup heruntergeladen',toastImport:'Daten importiert',
    toastClear:'Daten gelöscht',toastPin:'PIN gespeichert',toastPinErr:'Falscher PIN',confirmClear:'Alle Daten löschen?',
    confirmDel:'Diese Gewohnheit löschen?',start:'Start',motivation:['Heute ist der Tag ✨','Kleine Flamme, großes Feuer','Jeder Haken ist Fortschritt','Konstanz schlägt Motivation','Du baust 🔥']
  }},
  zh:{name:'中文',dir:'ltr',t:{
    appName:'Sholeh',tagline:'让习惯持续燃烧',streakLabel:'天连续',active:'活跃习惯',todayDone:'今日完成',
    habits:'习惯',fitness:'健身',stats:'统计',habitsToday:'今日习惯',newBtn:'新建',
    emptyTitle:'还没有火焰',emptyDesc:'创建你的第一个习惯',fitTitle:'今日训练',logBtn:'记录',
    emptyFitTitle:'还没有训练',emptyFitDesc:'记录你的第一组',progress:'你的进度',week:'近7天',
    topHabits:'最强习惯',totalFlames:'总火焰',totalWorkouts:'训练次数',settings:'设置',
    lang:'语言',theme:'主题',notif:'提醒',notifDesc:'顶部横幅 + 通知',security:'安全',
    pinDesc:'PIN锁',data:'数据与备份',export:'导出',import:'导入',clear:'清除全部',
    about:'Sholeh v2 — 完全离线安全',habitNew:'新习惯',habitName:'习惯名称',icon:'图标',color:'火焰颜色',
    target:'每日目标',optional:'(可选)',saveHabit:'点燃火焰 🔥',workoutNew:'记录训练',workoutName:'动作名称',
    sets:'组数',reps:'次数',duration:'时长(分)',notes:'备注',saveWorkout:'保存 💪',
    lockTitle:'Sholeh 锁定',lockSub:'输入PIN',reminder:'提醒',toastDone:'火焰已点燃! 🔥',
    toastAdded:'新火焰 🔥',toastWorkout:'训练已保存 💪',toastExport:'备份已下载',toastImport:'数据已导入',
    toastClear:'数据已清除',toastPin:'PIN已保存',toastPinErr:'PIN错误',confirmClear:'清除所有数据?',
    confirmDel:'删除此习惯?',start:'开始',motivation:['今天就是那天 ✨','小火焰，大能量','每一次打卡都是进步','坚持胜过动力','你在建设中 🔥']
  }},
  ja:{name:'日本語',dir:'ltr',t:{
    appName:'Sholeh',tagline:'習慣の炎を灯し続けよう',streakLabel:'日連続',active:'アクティブ',todayDone:'今日完了',
    habits:'習慣',fitness:'フィットネス',stats:'統計',habitsToday:'今日の習慣',newBtn:'新規',
    emptyTitle:'まだ炎がない',emptyDesc:'最初の習慣を作ろう',fitTitle:'今日のワークアウト',logBtn:'記録',
    emptyFitTitle:'まだワークアウトなし',emptyFitDesc:'最初のセットを記録',progress:'進捗',week:'直近7日',
    topHabits:'最強の習慣',totalFlames:'総炎',totalWorkouts:'ワークアウト',settings:'設定',
    lang:'言語',theme:'テーマ',notif:'リマインダー',notifDesc:'上部バナー + 通知',security:'セキュリティ',
    pinDesc:'PINロック',data:'データとバックアップ',export:'エクスポート',import:'インポート',clear:'全削除',
    about:'Sholeh v2 — 完全オフライン＆安全',habitNew:'新しい習慣',habitName:'習慣名',icon:'アイコン',color:'炎の色',
    target:'1日の目標',optional:'(任意)',saveHabit:'炎を灯す 🔥',workoutNew:'ワークアウト記録',workoutName:'種目名',
    sets:'セット',reps:'レップ',duration:'時間(分)',notes:'メモ',saveWorkout:'保存 💪',
    lockTitle:'Sholehロック',lockSub:'PINを入力',reminder:'リマインダー',toastDone:'炎が灯った! 🔥',
    toastAdded:'新しい炎 🔥',toastWorkout:'保存完了 💪',toastExport:'バックアップ完了',toastImport:'インポート完了',
    toastClear:'データ削除完了',toastPin:'PIN保存完了',toastPinErr:'PINが違います',confirmClear:'全データを削除しますか?',
    confirmDel:'この習慣を削除しますか?',start:'スタート',motivation:['今日がその日 ✨','小さな炎、大きな火','チェックは進歩','継続は力なり','あなたは築いている 🔥']
  }},
  ko:{name:'한국어',dir:'ltr',t:{
    appName:'Sholeh',tagline:'습관의 불을 계속 밝혀요',streakLabel:'일 연속',active:'활성 습관',todayDone:'오늘 완료',
    habits:'습관',fitness:'피트니스',stats:'통계',habitsToday:'오늘의 습관',newBtn:'새로 만들기',
    emptyTitle:'아직 불이 없어요',emptyDesc:'첫 습관을 만들어보세요',fitTitle:'오늘의 운동',logBtn:'기록',
    emptyFitTitle:'아직 운동 없음',emptyFitDesc:'첫 세트를 기록하세요',progress:'진행 상황',week:'최근 7일',
    topHabits:'가장 강한 습관',totalFlames:'총 불꽃',totalWorkouts:'운동 기록',settings:'설정',
    lang:'언어',theme:'테마',notif:'알림',notifDesc:'상단 배너 + 알림',security:'보안',
    pinDesc:'PIN 잠금',data:'데이터 및 백업',export:'내보내기',import:'가져오기',clear:'전체 삭제',
    about:'Sholeh v2 — 완전 오프라인 & 보안',habitNew:'새 습관',habitName:'습관 이름',icon:'아이콘',color:'불꽃 색',
    target:'일일 목표',optional:'(선택)',saveHabit:'불 붙이기 🔥',workoutNew:'운동 기록',workoutName:'운동 이름',
    sets:'세트',reps:'횟수',duration:'시간(분)',notes:'메모',saveWorkout:'저장 💪',
    lockTitle:'Sholeh 잠금',lockSub:'PIN 입력',reminder:'알림',toastDone:'불이 켜졌어요! 🔥',
    toastAdded:'새 불꽃 🔥',toastWorkout:'운동 저장됨 💪',toastExport:'백업 다운로드됨',toastImport:'데이터 가져옴',
    toastClear:'데이터 삭제됨',toastPin:'PIN 저장됨',toastPinErr:'잘못된 PIN',confirmClear:'모든 데이터를 삭제할까요?',
    confirmDel:'이 습관을 삭제할까요?',start:'시작',motivation:['오늘이 그날 ✨','작은 불꽃, 큰 불','체크는 성장','꾸준함이 동기보다 강하다','당신은 만들고 있어요 🔥']
  }},
  ru:{name:'Русский',dir:'ltr',t:{
    appName:'Sholeh',tagline:'Держи привычки горящими',streakLabel:'дней подряд',active:'Активные',todayDone:'Сделано сегодня',
    habits:'Привычки',fitness:'Фитнес',stats:'Статистика',habitsToday:'Привычки сегодня',newBtn:'Новая',
    emptyTitle:'Пока нет огня',emptyDesc:'Создай первую привычку',fitTitle:'Тренировки сегодня',logBtn:'Записать',
    emptyFitTitle:'Нет тренировок',emptyFitDesc:'Запиши первый подход',progress:'Твой прогресс',week:'Последние 7 дней',
    topHabits:'Сильнейшие привычки',totalFlames:'Всего огней',totalWorkouts:'Тренировок',settings:'Настройки',
    lang:'Язык',theme:'Тема',notif:'Напоминания',notifDesc:'Баннер + уведомления',security:'Безопасность',
    pinDesc:'Блокировка PIN',data:'Данные и бэкап',export:'Экспорт',import:'Импорт',clear:'Очистить всё',
    about:'Sholeh v2 — Оффлайн и безопасно',habitNew:'Новая привычка',habitName:'Название',icon:'Иконка',color:'Цвет',
    target:'Цель в день',optional:'(необязательно)',saveHabit:'Зажечь огонь 🔥',workoutNew:'Записать тренировку',workoutName:'Упражнение',
    sets:'Подходы',reps:'Повторы',duration:'Время (мин)',notes:'Заметки',saveWorkout:'Сохранить 💪',
    lockTitle:'Блокировка Sholeh',lockSub:'Введи PIN',reminder:'Напоминание',toastDone:'Огонь зажжён! 🔥',
    toastAdded:'Новый огонь 🔥',toastWorkout:'Тренировка сохранена 💪',toastExport:'Бэкап скачан',toastImport:'Данные импортированы',
    toastClear:'Данные очищены',toastPin:'PIN сохранён',toastPinErr:'Неверный PIN',confirmClear:'Удалить все данные?',
    confirmDel:'Удалить эту привычку?',start:'Начать',motivation:['Сегодня тот день ✨','Маленький огонь — большой пожар','Каждая галочка — прогресс','Постоянство сильнее мотивации','Ты строишь 🔥']
  }},
  pt:{name:'Português',dir:'ltr',t:{
    appName:'Sholeh',tagline:'Mantenha seus hábitos acesos',streakLabel:'dias seguidos',active:'Hábitos ativos',todayDone:'Feito hoje',
    habits:'Hábitos',fitness:'Fitness',stats:'Estatísticas',habitsToday:'Hábitos de hoje',newBtn:'Novo',
    emptyTitle:'Ainda sem chama',emptyDesc:'Crie seu primeiro hábito',fitTitle:'Treinos de hoje',logBtn:'Registrar',
    emptyFitTitle:'Sem treinos ainda',emptyFitDesc:'Registre sua primeira série',progress:'Seu progresso',week:'Últimos 7 dias',
    topHabits:'Hábitos mais fortes',totalFlames:'Chamas totais',totalWorkouts:'Treinos',settings:'Configurações',
    lang:'Idioma',theme:'Tema',notif:'Lembretes',notifDesc:'Banner superior + notificações',security:'Segurança',
    pinDesc:'Bloqueio com PIN',data:'Dados e backup',export:'Exportar',import:'Importar',clear:'Limpar tudo',
    about:'Sholeh v2 — Offline e seguro',habitNew:'Novo hábito',habitName:'Nome',icon:'Ícone',color:'Cor',
    target:'Meta diária',optional:'(opcional)',saveHabit:'Acender a chama 🔥',workoutNew:'Registrar treino',workoutName:'Exercício',
    sets:'Séries',reps:'Reps',duration:'Duração (min)',notes:'Notas',saveWorkout:'Salvar 💪',
    lockTitle:'Bloqueio Sholeh',lockSub:'Digite o PIN',reminder:'Lembrete',toastDone:'Chama acesa! 🔥',
    toastAdded:'Nova chama 🔥',toastWorkout:'Treino salvo 💪',toastExport:'Backup baixado',toastImport:'Dados importados',
    toastClear:'Dados limpos',toastPin:'PIN salvo',toastPinErr:'PIN errado',confirmClear:'Apagar todos os dados?',
    confirmDel:'Excluir este hábito?',start:'Começar',motivation:['Hoje é o dia ✨','Chama pequena, fogo grande','Cada check é progresso','Consistência vence','Você está construindo 🔥']
  }},
  it:{name:'Italiano',dir:'ltr',t:{
    appName:'Sholeh',tagline:'Tieni accese le tue abitudini',streakLabel:'giorni di fila',active:'Abitudini attive',todayDone:'Fatto oggi',
    habits:'Abitudini',fitness:'Fitness',stats:'Statistiche',habitsToday:'Abitudini di oggi',newBtn:'Nuovo',
    emptyTitle:'Ancora nessuna fiamma',emptyDesc:'Crea la tua prima abitudine',fitTitle:'Allenamenti di oggi',logBtn:'Registra',
    emptyFitTitle:'Nessun allenamento',emptyFitDesc:'Registra la prima serie',progress:'I tuoi progressi',week:'Ultimi 7 giorni',
    topHabits:'Abitudini più forti',totalFlames:'Fiamme totali',totalWorkouts:'Allenamenti',settings:'Impostazioni',
    lang:'Lingua',theme:'Tema',notif:'Promemoria',notifDesc:'Banner in alto + notifiche',security:'Sicurezza',
    pinDesc:'Blocco con PIN',data:'Dati e backup',export:'Esporta',import:'Importa',clear:'Cancella tutto',
    about:'Sholeh v2 — Offline e sicuro',habitNew:'Nuova abitudine',habitName:'Nome',icon:'Icona',color:'Colore',
    target:'Obiettivo giornaliero',optional:'(opzionale)',saveHabit:'Accendi la fiamma 🔥',workoutNew:'Registra allenamento',workoutName:'Esercizio',
    sets:'Serie',reps:'Ripetizioni',duration:'Durata (min)',notes:'Note',saveWorkout:'Salva 💪',
    lockTitle:'Blocco Sholeh',lockSub:'Inserisci il PIN',reminder:'Promemoria',toastDone:'Fiamma accesa! 🔥',
    toastAdded:'Nuova fiamma 🔥',toastWorkout:'Allenamento salvato 💪',toastExport:'Backup scaricato',toastImport:'Dati importati',
    toastClear:'Dati cancellati',toastPin:'PIN salvato',toastPinErr:'PIN errato',confirmClear:'Cancellare tutti i dati?',
    confirmDel:'Eliminare questa abitudine?',start:'Inizia',motivation:['Oggi è il giorno ✨','Piccola fiamma, grande fuoco','Ogni spunta è progresso','La costanza vince','Stai costruendo 🔥']
  }},
  tr:{name:'Türkçe',dir:'ltr',t:{
    appName:'Sholeh',tagline:'Alışkanlıklarını yanık tut',streakLabel:'gün seri',active:'Aktif alışkanlıklar',todayDone:'Bugün yapılan',
    habits:'Alışkanlıklar',fitness:'Fitness',stats:'İstatistik',habitsToday:'Bugünün alışkanlıkları',newBtn:'Yeni',
    emptyTitle:'Henüz alev yok',emptyDesc:'İlk alışkanlığını oluştur',fitTitle:'Bugünün antrenmanları',logBtn:'Kaydet',
    emptyFitTitle:'Henüz antrenman yok',emptyFitDesc:'İlk setini kaydet',progress:'İlerlemen',week:'Son 7 gün',
    topHabits:'En güçlü alışkanlıklar',totalFlames:'Toplam alev',totalWorkouts:'Antrenmanlar',settings:'Ayarlar',
    lang:'Dil',theme:'Tema',notif:'Hatırlatmalar',notifDesc:'Üst banner + bildirimler',security:'Güvenlik',
    pinDesc:'PIN kilidi',data:'Veri ve yedek',export:'Dışa aktar',import:'İçe aktar',clear:'Tümünü sil',
    about:'Sholeh v2 — Tamamen çevrimdışı ve güvenli',habitNew:'Yeni alışkanlık',habitName:'İsim',icon:'İkon',color:'Renk',
    target:'Günlük hedef',optional:'(isteğe bağlı)',saveHabit:'Alevi yak 🔥',workoutNew:'Antrenman kaydet',workoutName:'Egzersiz',
    sets:'Set',reps:'Tekrar',duration:'Süre (dk)',notes:'Notlar',saveWorkout:'Kaydet 💪',
    lockTitle:'Sholeh Kilit',lockSub:'PIN girin',reminder:'Hatırlatma',toastDone:'Alev yandı! 🔥',
    toastAdded:'Yeni alev 🔥',toastWorkout:'Antrenman kaydedildi 💪',toastExport:'Yedek indirildi',toastImport:'Veri aktarıldı',
    toastClear:'Veriler silindi',toastPin:'PIN kaydedildi',toastPinErr:'Yanlış PIN',confirmClear:'Tüm veriler silinsin mi?',
    confirmDel:'Bu alışkanlık silinsin mi?',start:'Başla',motivation:['Bugün o gün ✨','Küçük alev, büyük ateş','Her tik ilerlemedir','Tutarlılık motivasyonu yener','İnşa ediyorsun 🔥']
  }},
  hi:{name:'हिन्दी',dir:'ltr',t:{
    appName:'Sholeh',tagline:'अपनी आदतें जलती रखें',streakLabel:'दिन की लकीर',active:'सक्रिय आदतें',todayDone:'आज पूरा',
    habits:'आदतें',fitness:'फिटनेस',stats:'आँकड़े',habitsToday:'आज की आदतें',newBtn:'नया',
    emptyTitle:'अभी कोई लौ नहीं',emptyDesc:'अपनी पहली आदत बनाएं',fitTitle:'आज के वर्कआउट',logBtn:'लॉग',
    emptyFitTitle:'अभी कोई वर्कआउट नहीं',emptyFitDesc:'अपना पहला सेट लॉग करें',progress:'आपकी प्रगति',week:'पिछले 7 दिन',
    topHabits:'सबसे मजबूत आदतें',totalFlames:'कुल लौ',totalWorkouts:'वर्कआउट',settings:'सेटिंग्स',
    lang:'भाषा',theme:'थीम',notif:'रिमाइंडर',notifDesc:'टॉप बैनर + नोटिफिकेशन',security:'सुरक्षा',
    pinDesc:'PIN लॉक',data:'डेटा और बैकअप',export:'एक्सपोर्ट',import:'इंपोर्ट',clear:'सब साफ़ करें',
    about:'Sholeh v2 — पूरी तरह ऑफलाइन और सुरक्षित',habitNew:'नई आदत',habitName:'नाम',icon:'आइकन',color:'रंग',
    target:'दैनिक लक्ष्य',optional:'(वैकल्पिक)',saveHabit:'लौ जलाएं 🔥',workoutNew:'वर्कआउट लॉग',workoutName:'एक्सरसाइज',
    sets:'सेट',reps:'रेप्स',duration:'समय (मिनट)',notes:'नोट्स',saveWorkout:'सेव 💪',
    lockTitle:'Sholeh लॉक',lockSub:'PIN दर्ज करें',reminder:'रिमाइंडर',toastDone:'लौ जल गई! 🔥',
    toastAdded:'नई लौ 🔥',toastWorkout:'वर्कआउट सेव 💪',toastExport:'बैकअप डाउनलोड',toastImport:'डेटा इंपोर्ट',
    toastClear:'डेटा साफ़',toastPin:'PIN सेव',toastPinErr:'गलत PIN',confirmClear:'सभी डेटा हटाएं?',
    confirmDel:'यह आदत हटाएं?',start:'शुरू',motivation:['आज का दिन है ✨','छोटी लौ, बड़ी आग','हर चेक प्रगति है','निरंतरता जीतती है','आप बना रहे हैं 🔥']
  }},
  id:{name:'Indonesia',dir:'ltr',t:{
    appName:'Sholeh',tagline:'Jaga kebiasaan tetap menyala',streakLabel:'hari beruntun',active:'Kebiasaan aktif',todayDone:'Selesai hari ini',
    habits:'Kebiasaan',fitness:'Kebugaran',stats:'Statistik',habitsToday:'Kebiasaan hari ini',newBtn:'Baru',
    emptyTitle:'Belum ada api',emptyDesc:'Buat kebiasaan pertamamu',fitTitle:'Latihan hari ini',logBtn:'Catat',
    emptyFitTitle:'Belum ada latihan',emptyFitDesc:'Catat set pertamamu',progress:'Kemajuanmu',week:'7 hari terakhir',
    topHabits:'Kebiasaan terkuat',totalFlames:'Total api',totalWorkouts:'Latihan',settings:'Pengaturan',
    lang:'Bahasa',theme:'Tema',notif:'Pengingat',notifDesc:'Banner atas + notifikasi',security:'Keamanan',
    pinDesc:'Kunci PIN',data:'Data & cadangan',export:'Ekspor',import:'Impor',clear:'Hapus semua',
    about:'Sholeh v2 — Offline & aman',habitNew:'Kebiasaan baru',habitName:'Nama',icon:'Ikon',color:'Warna',
    target:'Target harian',optional:'(opsional)',saveHabit:'Nyalakan api 🔥',workoutNew:'Catat latihan',workoutName:'Latihan',
    sets:'Set',reps:'Rep',duration:'Durasi (mnt)',notes:'Catatan',saveWorkout:'Simpan 💪',
    lockTitle:'Kunci Sholeh',lockSub:'Masukkan PIN',reminder:'Pengingat',toastDone:'Api menyala! 🔥',
    toastAdded:'Api baru 🔥',toastWorkout:'Latihan disimpan 💪',toastExport:'Cadangan diunduh',toastImport:'Data diimpor',
    toastClear:'Data dihapus',toastPin:'PIN disimpan',toastPinErr:'PIN salah',confirmClear:'Hapus semua data?',
    confirmDel:'Hapus kebiasaan ini?',start:'Mulai',motivation:['Hari ini harinya ✨','Api kecil, api besar','Setiap centang adalah kemajuan','Konsistensi mengalahkan motivasi','Kamu sedang membangun 🔥']
  }},
  nl:{name:'Nederlands',dir:'ltr',t:{
    appName:'Sholeh',tagline:'Houd je gewoontes brandend',streakLabel:'dagen streak',active:'Actieve gewoontes',todayDone:'Vandaag gedaan',
    habits:'Gewoontes',fitness:'Fitness',stats:'Statistieken',habitsToday:'Gewoontes vandaag',newBtn:'Nieuw',
    emptyTitle:'Nog geen vlam',emptyDesc:'Maak je eerste gewoonte',fitTitle:'Workouts vandaag',logBtn:'Loggen',
    emptyFitTitle:'Nog geen workouts',emptyFitDesc:'Log je eerste set',progress:'Jouw voortgang',week:'Laatste 7 dagen',
    topHabits:'Sterkste gewoontes',totalFlames:'Totaal vlammen',totalWorkouts:'Workouts',settings:'Instellingen',
    lang:'Taal',theme:'Thema',notif:'Herinneringen',notifDesc:'Banner + meldingen',security:'Beveiliging',
    pinDesc:'PIN-vergrendeling',data:'Data & backup',export:'Exporteren',import:'Importeren',clear:'Alles wissen',
    about:'Sholeh v2 — Offline & veilig',habitNew:'Nieuwe gewoonte',habitName:'Naam',icon:'Icoon',color:'Kleur',
    target:'Dagelijks doel',optional:'(optioneel)',saveHabit:'Vlam aansteken 🔥',workoutNew:'Workout loggen',workoutName:'Oefening',
    sets:'Sets',reps:'Reps',duration:'Duur (min)',notes:'Notities',saveWorkout:'Opslaan 💪',
    lockTitle:'Sholeh Slot',lockSub:'Voer PIN in',reminder:'Herinnering',toastDone:'Vlam aangestoken! 🔥',
    toastAdded:'Nieuwe vlam 🔥',toastWorkout:'Workout opgeslagen 💪',toastExport:'Backup gedownload',toastImport:'Data geïmporteerd',
    toastClear:'Data gewist',toastPin:'PIN opgeslagen',toastPinErr:'Verkeerde PIN',confirmClear:'Alle data wissen?',
    confirmDel:'Deze gewoonte verwijderen?',start:'Start',motivation:['Vandaag is de dag ✨','Kleine vlam, groot vuur','Elke check is vooruitgang','Consistentie wint','Je bouwt 🔥']
  }},
  pl:{name:'Polski',dir:'ltr',t:{
    appName:'Sholeh',tagline:'Trzymaj nawyki w ogniu',streakLabel:'dni z rzędu',active:'Aktywne nawyki',todayDone:'Zrobione dziś',
    habits:'Nawyki',fitness:'Fitness',stats:'Statystyki',habitsToday:'Nawyki na dziś',newBtn:'Nowy',
    emptyTitle:'Jeszcze nie ma ognia',emptyDesc:'Stwórz pierwszy nawyk',fitTitle:'Treningi dziś',logBtn:'Zapisz',
    emptyFitTitle:'Brak treningów',emptyFitDesc:'Zapisz pierwszą serię',progress:'Twój postęp',week:'Ostatnie 7 dni',
    topHabits:'Najsilniejsze nawyki',totalFlames:'Razem ognie',totalWorkouts:'Treningi',settings:'Ustawienia',
    lang:'Język',theme:'Motyw',notif:'Przypomnienia',notifDesc:'Baner + powiadomienia',security:'Bezpieczeństwo',
    pinDesc:'Blokada PIN',data:'Dane i kopia',export:'Eksport',import:'Import',clear:'Wyczyść wszystko',
    about:'Sholeh v2 — Offline i bezpiecznie',habitNew:'Nowy nawyk',habitName:'Nazwa',icon:'Ikona',color:'Kolor',
    target:'Cel dzienny',optional:'(opcjonalne)',saveHabit:'Zapal ogień 🔥',workoutNew:'Zapisz trening',workoutName:'Ćwiczenie',
    sets:'Serie',reps:'Powtórzenia',duration:'Czas (min)',notes:'Notatki',saveWorkout:'Zapisz 💪',
    lockTitle:'Blokada Sholeh',lockSub:'Wpisz PIN',reminder:'Przypomnienie',toastDone:'Ogień zapalony! 🔥',
    toastAdded:'Nowy ogień 🔥',toastWorkout:'Trening zapisany 💪',toastExport:'Kopia pobrana',toastImport:'Dane zaimportowane',
    toastClear:'Dane wyczyszczone',toastPin:'PIN zapisany',toastPinErr:'Zły PIN',confirmClear:'Usunąć wszystkie dane?',
    confirmDel:'Usunąć ten nawyk?',start:'Start',motivation:['Dziś jest ten dzień ✨','Mały ogień, wielki pożar','Każdy check to postęp','Konsekwencja wygrywa','Budujesz 🔥']
  }},
  sv:{name:'Svenska',dir:'ltr',t:{
    appName:'Sholeh',tagline:'Håll dina vanor brinnande',streakLabel:'dagars streak',active:'Aktiva vanor',todayDone:'Klart idag',
    habits:'Vanor',fitness:'Fitness',stats:'Statistik',habitsToday:'Dagens vanor',newBtn:'Ny',
    emptyTitle:'Ingen flamma än',emptyDesc:'Skapa din första vana',fitTitle:'Dagens pass',logBtn:'Logga',
    emptyFitTitle:'Inga pass än',emptyFitDesc:'Logga ditt första set',progress:'Din progress',week:'Senaste 7 dagarna',
    topHabits:'Starkaste vanorna',totalFlames:'Totalt flammor',totalWorkouts:'Pass',settings:'Inställningar',
    lang:'Språk',theme:'Tema',notif:'Påminnelser',notifDesc:'Topbanner + notiser',security:'Säkerhet',
    pinDesc:'PIN-lås',data:'Data & backup',export:'Exportera',import:'Importera',clear:'Rensa allt',
    about:'Sholeh v2 — Offline & säkert',habitNew:'Ny vana',habitName:'Namn',icon:'Ikon',color:'Färg',
    target:'Dagligt mål',optional:'(valfritt)',saveHabit:'Tänd flamman 🔥',workoutNew:'Logga pass',workoutName:'Övning',
    sets:'Set',reps:'Reps',duration:'Tid (min)',notes:'Anteckningar',saveWorkout:'Spara 💪',
    lockTitle:'Sholeh Lås',lockSub:'Ange PIN',reminder:'Påminnelse',toastDone:'Flamma tänd! 🔥',
    toastAdded:'Ny flamma 🔥',toastWorkout:'Pass sparat 💪',toastExport:'Backup nedladdad',toastImport:'Data importerad',
    toastClear:'Data rensad',toastPin:'PIN sparad',toastPinErr:'Fel PIN',confirmClear:'Radera all data?',
    confirmDel:'Radera denna vana?',start:'Starta',motivation:['Idag är dagen ✨','Liten flamma, stor eld','Varje check är framsteg','Konsekvens vinner','Du bygger 🔥']
  }},
  vi:{name:'Tiếng Việt',dir:'ltr',t:{
    appName:'Sholeh',tagline:'Giữ thói quen luôn cháy',streakLabel:'ngày liên tiếp',active:'Thói quen đang chạy',todayDone:'Hoàn thành hôm nay',
    habits:'Thói quen',fitness:'Thể dục',stats:'Thống kê',habitsToday:'Thói quen hôm nay',newBtn:'Mới',
    emptyTitle:'Chưa có ngọn lửa',emptyDesc:'Tạo thói quen đầu tiên',fitTitle:'Buổi tập hôm nay',logBtn:'Ghi lại',
    emptyFitTitle:'Chưa có buổi tập',emptyFitDesc:'Ghi set đầu tiên',progress:'Tiến độ của bạn',week:'7 ngày gần nhất',
    topHabits:'Thói quen mạnh nhất',totalFlames:'Tổng ngọn lửa',totalWorkouts:'Buổi tập',settings:'Cài đặt',
    lang:'Ngôn ngữ',theme:'Giao diện',notif:'Nhắc nhở',notifDesc:'Banner trên + thông báo',security:'Bảo mật',
    pinDesc:'Khóa PIN',data:'Dữ liệu & sao lưu',export:'Xuất',import:'Nhập',clear:'Xóa tất cả',
    about:'Sholeh v2 — Ngoại tuyến & an toàn',habitNew:'Thói quen mới',habitName:'Tên',icon:'Biểu tượng',color:'Màu',
    target:'Mục tiêu ngày',optional:'(tùy chọn)',saveHabit:'Thắp lửa 🔥',workoutNew:'Ghi buổi tập',workoutName:'Bài tập',
    sets:'Set',reps:'Rep',duration:'Thời gian (phút)',notes:'Ghi chú',saveWorkout:'Lưu 💪',
    lockTitle:'Khóa Sholeh',lockSub:'Nhập PIN',reminder:'Nhắc nhở',toastDone:'Lửa đã cháy! 🔥',
    toastAdded:'Ngọn lửa mới 🔥',toastWorkout:'Đã lưu buổi tập 💪',toastExport:'Đã tải bản sao',toastImport:'Đã nhập dữ liệu',
    toastClear:'Đã xóa dữ liệu',toastPin:'Đã lưu PIN',toastPinErr:'Sai PIN',confirmClear:'Xóa tất cả dữ liệu?',
    confirmDel:'Xóa thói quen này?',start:'Bắt đầu',motivation:['Hôm nay là ngày đó ✨','Ngọn lửa nhỏ, đám cháy lớn','Mỗi dấu tích là tiến bộ','Kiên trì thắng động lực','Bạn đang xây dựng 🔥']
  }},
  th:{name:'ไทย',dir:'ltr',t:{
    appName:'Sholeh',tagline:'รักษาเปลวไฟของนิสัยไว้',streakLabel:'วันติดต่อกัน',active:'นิสัยที่ใช้งาน',todayDone:'ทำวันนี้แล้ว',
    habits:'นิสัย',fitness:'ฟิตเนส',stats:'สถิติ',habitsToday:'นิสัยวันนี้',newBtn:'ใหม่',
    emptyTitle:'ยังไม่มีเปลวไฟ',emptyDesc:'สร้างนิสัยแรกของคุณ',fitTitle:'การออกกำลังกายวันนี้',logBtn:'บันทึก',
    emptyFitTitle:'ยังไม่มีการออกกำลัง',emptyFitDesc:'บันทึกเซ็ตแรก',progress:'ความก้าวหน้าของคุณ',week:'7 วันล่าสุด',
    topHabits:'นิสัยที่แข็งแกร่งที่สุด',totalFlames:'เปลวไฟทั้งหมด',totalWorkouts:'การออกกำลัง',settings:'ตั้งค่า',
    lang:'ภาษา',theme:'ธีม',notif:'การเตือน',notifDesc:'แบนเนอร์บน + การแจ้งเตือน',security:'ความปลอดภัย',
    pinDesc:'ล็อกด้วย PIN',data:'ข้อมูลและสำรอง',export:'ส่งออก',import:'นำเข้า',clear:'ล้างทั้งหมด',
    about:'Sholeh v2 — ออฟไลน์และปลอดภัย',habitNew:'นิสัยใหม่',habitName:'ชื่อ',icon:'ไอคอน',color:'สี',
    target:'เป้าหมายรายวัน',optional:'(ไม่บังคับ)',saveHabit:'จุดเปลวไฟ 🔥',workoutNew:'บันทึกการออกกำลัง',workoutName:'ท่าออกกำลัง',
    sets:'เซ็ต',reps:'ครั้ง',duration:'เวลา (นาที)',notes:'บันทึก',saveWorkout:'บันทึก 💪',
    lockTitle:'ล็อก Sholeh',lockSub:'ใส่ PIN',reminder:'การเตือน',toastDone:'จุดเปลวไฟแล้ว! 🔥',
    toastAdded:'เปลวไฟใหม่ 🔥',toastWorkout:'บันทึกแล้ว 💪',toastExport:'ดาวน์โหลดสำรองแล้ว',toastImport:'นำเข้าข้อมูลแล้ว',
    toastClear:'ล้างข้อมูลแล้ว',toastPin:'บันทึก PIN แล้ว',toastPinErr:'PIN ผิด',confirmClear:'ลบข้อมูลทั้งหมด?',
    confirmDel:'ลบนิสัยนี้?',start:'เริ่ม',motivation:['วันนี้คือวันนั้น ✨','เปลวเล็ก ไฟใหญ่','ทุกเช็คคือความก้าวหน้า','ความสม่ำเสมอชนะ','คุณกำลังสร้าง 🔥']
  }},
  uk:{name:'Українська',dir:'ltr',t:{
    appName:'Sholeh',tagline:'Тримай звички палаючими',streakLabel:'днів поспіль',active:'Активні звички',todayDone:'Зроблено сьогодні',
    habits:'Звички',fitness:'Фітнес',stats:'Статистика',habitsToday:'Звички сьогодні',newBtn:'Нова',
    emptyTitle:'Ще немає вогню',emptyDesc:'Створи першу звичку',fitTitle:'Тренування сьогодні',logBtn:'Записати',
    emptyFitTitle:'Немає тренувань',emptyFitDesc:'Запиши перший підхід',progress:'Твій прогрес',week:'Останні 7 днів',
    topHabits:'Найсильніші звички',totalFlames:'Всього вогнів',totalWorkouts:'Тренувань',settings:'Налаштування',
    lang:'Мова',theme:'Тема',notif:'Нагадування',notifDesc:'Банер + сповіщення',security:'Безпека',
    pinDesc:'Блокування PIN',data:'Дані та бекап',export:'Експорт',import:'Імпорт',clear:'Очистити все',
    about:'Sholeh v2 — Офлайн і безпечно',habitNew:'Нова звичка',habitName:'Назва',icon:'Іконка',color:'Колір',
    target:'Ціль на день',optional:'(необовʼязково)',saveHabit:'Запалити вогонь 🔥',workoutNew:'Записати тренування',workoutName:'Вправа',
    sets:'Підходи',reps:'Повтори',duration:'Час (хв)',notes:'Нотатки',saveWorkout:'Зберегти 💪',
    lockTitle:'Блокування Sholeh',lockSub:'Введи PIN',reminder:'Нагадування',toastDone:'Вогонь запалено! 🔥',
    toastAdded:'Новий вогонь 🔥',toastWorkout:'Тренування збережено 💪',toastExport:'Бекап завантажено',toastImport:'Дані імпортовано',
    toastClear:'Дані очищено',toastPin:'PIN збережено',toastPinErr:'Невірний PIN',confirmClear:'Видалити всі дані?',
    confirmDel:'Видалити цю звичку?',start:'Почати',motivation:['Сьогодні той день ✨','Маленький вогонь — велика пожежа','Кожна галочка — прогрес','Послідовність перемагає','Ти будуєш 🔥']
  }},
  he:{name:'עברית',dir:'rtl',t:{
    appName:'שולה',tagline:'שמור על ההרגלים בוערים',streakLabel:'ימים רצופים',active:'הרגלים פעילים',todayDone:'הושלם היום',
    habits:'הרגלים',fitness:'כושר',stats:'סטטיסטיקה',habitsToday:'הרגלי היום',newBtn:'חדש',
    emptyTitle:'עדיין אין להבה',emptyDesc:'צור את ההרגל הראשון',fitTitle:'אימוני היום',logBtn:'רשום',
    emptyFitTitle:'עדיין אין אימונים',emptyFitDesc:'רשום את הסט הראשון',progress:'ההתקדמות שלך',week:'7 הימים האחרונים',
    topHabits:'ההרגלים החזקים',totalFlames:'סה״כ להבות',totalWorkouts:'אימונים',settings:'הגדרות',
    lang:'שפה',theme:'ערכת נושא',notif:'תזכורות',notifDesc:'באנר עליון + התראות',security:'אבטחה',
    pinDesc:'נעילת PIN',data:'נתונים וגיבוי',export:'ייצוא',import:'ייבוא',clear:'מחק הכל',
    about:'שולה v2 — לא מקוון ומאובטח',habitNew:'הרגל חדש',habitName:'שם',icon:'אייקון',color:'צבע',
    target:'יעד יומי',optional:'(אופציונלי)',saveHabit:'הדלק את הלהבה 🔥',workoutNew:'רשום אימון',workoutName:'תרגיל',
    sets:'סטים',reps:'חזרות',duration:'משך (דק)',notes:'הערות',saveWorkout:'שמור 💪',
    lockTitle:'נעילת שולה',lockSub:'הזן PIN',reminder:'תזכורת',toastDone:'הלהבה הודלקה! 🔥',
    toastAdded:'להבה חדשה 🔥',toastWorkout:'אימון נשמר 💪',toastExport:'גיבוי הורד',toastImport:'נתונים יובאו',
    toastClear:'נתונים נמחקו',toastPin:'PIN נשמר',toastPinErr:'PIN שגוי',confirmClear:'למחוק את כל הנתונים?',
    confirmDel:'למחוק את ההרגל הזה?',start:'התחל',motivation:['היום הוא היום ✨','להבה קטנה, אש גדולה','כל סימון הוא התקדמות','עקביות מנצחת','אתה בונה 🔥']
  }},
  ms:{name:'Bahasa Melayu',dir:'ltr',t:{
    appName:'Sholeh',tagline:'Pastikan tabiat sentiasa menyala',streakLabel:'hari berturut',active:'Tabiat aktif',todayDone:'Selesai hari ini',
    habits:'Tabiat',fitness:'Kecergasan',stats:'Statistik',habitsToday:'Tabiat hari ini',newBtn:'Baharu',
    emptyTitle:'Belum ada api',emptyDesc:'Cipta tabiat pertama anda',fitTitle:'Latihan hari ini',logBtn:'Log',
    emptyFitTitle:'Belum ada latihan',emptyFitDesc:'Log set pertama anda',progress:'Kemajuan anda',week:'7 hari lepas',
    topHabits:'Tabiat terkuat',totalFlames:'Jumlah api',totalWorkouts:'Latihan',settings:'Tetapan',
    lang:'Bahasa',theme:'Tema',notif:'Peringatan',notifDesc:'Banner atas + pemberitahuan',security:'Keselamatan',
    pinDesc:'Kunci PIN',data:'Data & sandaran',export:'Eksport',import:'Import',clear:'Padam semua',
    about:'Sholeh v2 — Luar talian & selamat',habitNew:'Tabiat baharu',habitName:'Nama',icon:'Ikon',color:'Warna',
    target:'Sasaran harian',optional:'(pilihan)',saveHabit:'Nyalakan api 🔥',workoutNew:'Log latihan',workoutName:'Senaman',
    sets:'Set',reps:'Ulangan',duration:'Tempoh (min)',notes:'Nota',saveWorkout:'Simpan 💪',
    lockTitle:'Kunci Sholeh',lockSub:'Masukkan PIN',reminder:'Peringatan',toastDone:'Api menyala! 🔥',
    toastAdded:'Api baharu 🔥',toastWorkout:'Latihan disimpan 💪',toastExport:'Sandaran dimuat turun',toastImport:'Data diimport',
    toastClear:'Data dipadam',toastPin:'PIN disimpan',toastPinErr:'PIN salah',confirmClear:'Padam semua data?',
    confirmDel:'Padam tabiat ini?',start:'Mula',motivation:['Hari ini harinya ✨','Api kecil, api besar','Setiap tanda adalah kemajuan','Konsisten menang','Anda sedang membina 🔥']
  }},
  bn:{name:'বাংলা',dir:'ltr',t:{
    appName:'Sholeh',tagline:'আপনার অভ্যাস জ্বালিয়ে রাখুন',streakLabel:'দিনের ধারা',active:'সক্রিয় অভ্যাস',todayDone:'আজ সম্পন্ন',
    habits:'অভ্যাস',fitness:'ফিটনেস',stats:'পরিসংখ্যান',habitsToday:'আজকের অভ্যাস',newBtn:'নতুন',
    emptyTitle:'এখনও কোনো আগুন নেই',emptyDesc:'আপনার প্রথম অভ্যাস তৈরি করুন',fitTitle:'আজকের ওয়ার্কআউট',logBtn:'লগ',
    emptyFitTitle:'এখনও কোনো ওয়ার্কআউট নেই',emptyFitDesc:'প্রথম সেট লগ করুন',progress:'আপনার অগ্রগতি',week:'গতছ ৭ দিন',
    topHabits:'সবচেয়ে শক্তিশালী অভ্যাস',totalFlames:'মোট আগুন',totalWorkouts:'ওয়ার্কআউট',settings:'সেটিংস',
    lang:'ভাষা',theme:'থিম',notif:'রিমাইন্ডার',notifDesc:'টপ ব্যানার + নোটিফিকেশন',security:'নিরাপত্তা',
    pinDesc:'PIN লক',data:'ডেটা ও ব্যাকআপ',export:'এক্সপোর্ট',import:'ইমপোর্ট',clear:'সব মুছুন',
    about:'Sholeh v2 — সম্পূর্ণ অফলাইন ও নিরাপদ',habitNew:'নতুন অভ্যাস',habitName:'নাম',icon:'আইকন',color:'রঙ',
    target:'দৈনিক লক্ষ্য',optional:'(ঐচ্ছিক)',saveHabit:'আগুন জ্বালান 🔥',workoutNew:'ওয়ার্কআউট লগ',workoutName:'ব্যায়াম',
    sets:'সেট',reps:'রেপ',duration:'সময় (মিনিট)',notes:'নোট',saveWorkout:'সেভ 💪',
    lockTitle:'Sholeh লক',lockSub:'PIN লিখুন',reminder:'রিমাইন্ডার',toastDone:'আগুন জ্বলেছে! 🔥',
    toastAdded:'নতুন আগুন 🔥',toastWorkout:'ওয়ার্কআউট সেভ 💪',toastExport:'ব্যাকআপ ডাউনলোড',toastImport:'ডেটা ইমপোর্ট',
    toastClear:'ডেটা মুছে গেছে',toastPin:'PIN সেভ',toastPinErr:'ভুল PIN',confirmClear:'সব ডেটা মুছবেন?',
    confirmDel:'এই অভ্যাস মুছবেন?',start:'শুরু',motivation:['আজই সেই দিন ✨','ছোট আগুন, বড় অগ্নি','প্রতিটি টিক অগ্রগতি','ধারাবাহিকতা জয়ী','আপনি গড়ে তুলছেন 🔥']
  }},
  ur:{name:'اردو',dir:'rtl',t:{
    appName:'شعلہ',tagline:'اپنی عادتوں کو جلاتے رکھو',streakLabel:'دن مسلسل',active:'فعال عادات',todayDone:'آج مکمل',
    habits:'عادات',fitness:'فٹنس',stats:'اعداد و شمار',habitsToday:'آج کی عادات',newBtn:'نیا',
    emptyTitle:'ابھی کوئی شعلہ نہیں',emptyDesc:'اپنی پہلی عادت بنائیں',fitTitle:'آج کی ورزش',logBtn:'لاگ',
    emptyFitTitle:'ابھی کوئی ورزش نہیں',emptyFitDesc:'پہلا سیٹ لاگ کریں',progress:'آپ کی پیشرفت',week:'آخری ۷ دن',
    topHabits:'مضبوط ترین عادات',totalFlames:'کل شعلے',totalWorkouts:'ورزشیں',settings:'ترتیبات',
    lang:'زبان',theme:'تھیم',notif:'یاد دہانی',notifDesc:'اوپر بینر + نوٹیفکیشن',security:'سیکورٹی',
    pinDesc:'PIN لاک',data:'ڈیٹا اور بیک اپ',export:'ایکسپورٹ',import:'امپورٹ',clear:'سب صاف کریں',
    about:'شعلہ v2 — مکمل آف لائن اور محفوظ',habitNew:'نئی عادت',habitName:'نام',icon:'آئیکن',color:'رنگ',
    target:'روزانہ ہدف',optional:'(اختیاری)',saveHabit:'شعلہ جلائیں 🔥',workoutNew:'ورزش لاگ',workoutName:'مشق',
    sets:'سیٹ',reps:'ریپس',duration:'مدت (منٹ)',notes:'نوٹس',saveWorkout:'محفوظ 💪',
    lockTitle:'شعلہ لاک',lockSub:'PIN درج کریں',reminder:'یاد دہانی',toastDone:'شعلہ جل گیا! 🔥',
    toastAdded:'نیا شعلہ 🔥',toastWorkout:'ورزش محفوظ 💪',toastExport:'بیک اپ ڈاؤن لوڈ',toastImport:'ڈیٹا امپورٹ',
    toastClear:'ڈیٹا صاف',toastPin:'PIN محفوظ',toastPinErr:'غلط PIN',confirmClear:'تمام ڈیٹا حذف کریں؟',
    confirmDel:'یہ عادت حذف کریں؟',start:'شروع',motivation:['آج وہ دن ہے ✨','چھوٹا شعلہ، بڑی آگ','ہر ٹک پیش رفت ہے','استقامت جیتتی ہے','آپ بنا رہے ہیں 🔥']
  }},
  ro:{name:'Română',dir:'ltr',t:{
    appName:'Sholeh',tagline:'Ține-ți obiceiurile aprinse',streakLabel:'zile consecutive',active:'Obiceiuri active',todayDone:'Făcut azi',
    habits:'Obiceiuri',fitness:'Fitness',stats:'Statistici',habitsToday:'Obiceiuri de azi',newBtn:'Nou',
    emptyTitle:'Nicio flacără încă',emptyDesc:'Creează primul obicei',fitTitle:'Antrenamente azi',logBtn:'Înregistrează',
    emptyFitTitle:'Niciun antrenament',emptyFitDesc:'Înregistrează primul set',progress:'Progresul tău',week:'Ultimele 7 zile',
    topHabits:'Cele mai puternice',totalFlames:'Total flăcări',totalWorkouts:'Antrenamente',settings:'Setări',
    lang:'Limbă',theme:'Temă',notif:'Memento-uri',notifDesc:'Banner sus + notificări',security:'Securitate',
    pinDesc:'Blocare PIN',data:'Date și backup',export:'Exportă',import:'Importă',clear:'Șterge tot',
    about:'Sholeh v2 — Offline și sigur',habitNew:'Obicei nou',habitName:'Nume',icon:'Iconiță',color:'Culoare',
    target:'Țintă zilnică',optional:'(opțional)',saveHabit:'Aprinde flacăra 🔥',workoutNew:'Înregistrează antrenament',workoutName:'Exercițiu',
    sets:'Seturi',reps:'Repetări',duration:'Durată (min)',notes:'Note',saveWorkout:'Salvează 💪',
    lockTitle:'Blocare Sholeh',lockSub:'Introdu PIN',reminder:'Memento',toastDone:'Flacăra aprinsă! 🔥',
    toastAdded:'Flacără nouă 🔥',toastWorkout:'Antrenament salvat 💪',toastExport:'Backup descărcat',toastImport:'Date importate',
    toastClear:'Date șterse',toastPin:'PIN salvat',toastPinErr:'PIN greșit',confirmClear:'Ștergi toate datele?',
    confirmDel:'Ștergi acest obicei?',start:'Începe',motivation:['Azi e ziua ✨','Flacără mică, foc mare','Fiecare bifă e progres','Consistența învinge','Construiești 🔥']
  }},
  cs:{name:'Čeština',dir:'ltr',t:{
    appName:'Sholeh',tagline:'Udržuj své návyky hořící',streakLabel:'dní v řadě',active:'Aktivní návyky',todayDone:'Hotovo dnes',
    habits:'Návyky',fitness:'Fitness',stats:'Statistiky',habitsToday:'Dnešní návyky',newBtn:'Nový',
    emptyTitle:'Zatím žádný plamen',emptyDesc:'Vytvoř svůj první návyk',fitTitle:'Dnešní tréninky',logBtn:'Zaznamenat',
    emptyFitTitle:'Zatím žádné tréninky',emptyFitDesc:'Zaznamenej první sérii',progress:'Tvůj pokrok',week:'Posledních 7 dní',
    topHabits:'Nejsilnější návyky',totalFlames:'Celkem plamenů',totalWorkouts:'Tréninky',settings:'Nastavení',
    lang:'Jazyk',theme:'Motiv',notif:'Připomínky',notifDesc:'Horní banner + oznámení',security:'Zabezpečení',
    pinDesc:'Zámek PIN',data:'Data a záloha',export:'Exportovat',import:'Importovat',clear:'Smazat vše',
    about:'Sholeh v2 — Offline a bezpečné',habitNew:'Nový návyk',habitName:'Název',icon:'Ikona',color:'Barva',
    target:'Denní cíl',optional:'(volitelné)',saveHabit:'Zapálit plamen 🔥',workoutNew:'Zaznamenat trénink',workoutName:'Cvičení',
    sets:'Série',reps:'Opakování',duration:'Doba (min)',notes:'Poznámky',saveWorkout:'Uložit 💪',
    lockTitle:'Zámek Sholeh',lockSub:'Zadej PIN',reminder:'Připomínka',toastDone:'Plamen zapálen! 🔥',
    toastAdded:'Nový plamen 🔥',toastWorkout:'Trénink uložen 💪',toastExport:'Záloha stažena',toastImport:'Data importována',
    toastClear:'Data smazána',toastPin:'PIN uložen',toastPinErr:'Špatný PIN',confirmClear:'Smazat všechna data?',
    confirmDel:'Smazat tento návyk?',start:'Start',motivation:['Dnes je ten den ✨','Malý plamen, velký oheň','Každé zaškrtnutí je pokrok','Konzistence vítězí','Buduješ 🔥']
  }},
  el:{name:'Ελληνικά',dir:'ltr',t:{
    appName:'Sholeh',tagline:'Κράτα τις συνήθειές σου αναμμένες',streakLabel:'μέρες σερί',active:'Ενεργές συνήθειες',todayDone:'Έγινε σήμερα',
    habits:'Συνήθειες',fitness:'Γυμναστική',stats:'Στατιστικά',habitsToday:'Σημερινές συνήθειες',newBtn:'Νέα',
    emptyTitle:'Δεν υπάρχει φλόγα ακόμα',emptyDesc:'Δημιούργησε την πρώτη σου συνήθεια',fitTitle:'Σημερινές προπονήσεις',logBtn:'Καταγραφή',
    emptyFitTitle:'Δεν υπάρχουν προπονήσεις',emptyFitDesc:'Κατάγραψε το πρώτο σετ',progress:'Η πρόοδός σου',week:'Τελευταίες 7 μέρες',
    topHabits:'Ισχυρότερες συνήθειες',totalFlames:'Συνολικές φλόγες',totalWorkouts:'Προπονήσεις',settings:'Ρυθμίσεις',
    lang:'Γλώσσα',theme:'Θέμα',notif:'Υπενθυμίσεις',notifDesc:'Πάνω banner + ειδοποιήσεις',security:'Ασφάλεια',
    pinDesc:'Κλείδωμα PIN',data:'Δεδομένα & αντίγραφο',export:'Εξαγωγή',import:'Εισαγωγή',clear:'Διαγραφή όλων',
    about:'Sholeh v2 — Offline & ασφαλές',habitNew:'Νέα συνήθεια',habitName:'Όνομα',icon:'Εικονίδιο',color:'Χρώμα',
    target:'Ημερήσιος στόχος',optional:'(προαιρετικό)',saveHabit:'Άναψε τη φλόγα 🔥',workoutNew:'Καταγραφή προπόνησης',workoutName:'Άσκηση',
    sets:'Σετ',reps:'Επαναλήψεις',duration:'Διάρκεια (λεπ)',notes:'Σημειώσεις',saveWorkout:'Αποθήκευση 💪',
    lockTitle:'Κλείδωμα Sholeh',lockSub:'Εισάγετε PIN',reminder:'Υπενθύμιση',toastDone:'Η φλόγα άναψε! 🔥',
    toastAdded:'Νέα φλόγα 🔥',toastWorkout:'Προπόνηση αποθηκεύτηκε 💪',toastExport:'Αντίγραφο κατέβηκε',toastImport:'Δεδομένα εισήχθησαν',
    toastClear:'Δεδομένα διαγράφηκαν',toastPin:'PIN αποθηκεύτηκε',toastPinErr:'Λάθος PIN',confirmClear:'Διαγραφή όλων των δεδομένων;',
    confirmDel:'Διαγραφή αυτής της συνήθειας;',start:'Έναρξη',motivation:['Σήμερα είναι η μέρα ✨','Μικρή φλόγα, μεγάλη φωτιά','Κάθε τικ είναι πρόοδος','Η συνέπεια κερδίζει','Χτίζεις 🔥']
  }},
  hu:{name:'Magyar',dir:'ltr',t:{
    appName:'Sholeh',tagline:'Tartsd égve a szokásaidat',streakLabel:'nap sorozat',active:'Aktív szokások',todayDone:'Ma kész',
    habits:'Szokások',fitness:'Fitness',stats:'Statisztika',habitsToday:'Mai szokások',newBtn:'Új',
    emptyTitle:'Még nincs láng',emptyDesc:'Hozd létre az első szokásod',fitTitle:'Mai edzések',logBtn:'Naplózás',
    emptyFitTitle:'Még nincs edzés',emptyFitDesc:'Naplózd az első szetted',progress:'A fejlődésed',week:'Elmúlt 7 nap',
    topHabits:'Legerősebb szokások',totalFlames:'Összes láng',totalWorkouts:'Edzések',settings:'Beállítások',
    lang:'Nyelv',theme:'Téma',notif:'Emlékeztetők',notifDesc:'Felső banner + értesítések',security:'Biztonság',
    pinDesc:'PIN zár',data:'Adatok és biztonsági mentés',export:'Exportálás',import:'Importálás',clear:'Minden törlése',
    about:'Sholeh v2 — Offline és biztonságos',habitNew:'Új szokás',habitName:'Név',icon:'Ikon',color:'Szín',
    target:'Napi cél',optional:'(opcionális)',saveHabit:'Gyújtsd meg a lángot 🔥',workoutNew:'Edzés naplózása',workoutName:'Gyakorlat',
    sets:'Szettek',reps:'Ismétlések',duration:'Időtartam (perc)',notes:'Jegyzetek',saveWorkout:'Mentés 💪',
    lockTitle:'Sholeh zár',lockSub:'Add meg a PIN-t',reminder:'Emlékeztető',toastDone:'Láng meggyújtva! 🔥',
    toastAdded:'Új láng 🔥',toastWorkout:'Edzés mentve 💪',toastExport:'Mentés letöltve',toastImport:'Adatok importálva',
    toastClear:'Adatok törölve',toastPin:'PIN mentve',toastPinErr:'Rossz PIN',confirmClear:'Törölni az összes adatot?',
    confirmDel:'Törölni ezt a szokást?',start:'Kezdés',motivation:['Ma van az a nap ✨','Kis láng, nagy tűz','Minden pipa fejlődés','A következetesség nyer','Építkezel 🔥']
  }},
  fi:{name:'Suomi',dir:'ltr',t:{
    appName:'Sholeh',tagline:'Pidä tapasi tulessa',streakLabel:'päivän putki',active:'Aktiiviset tavat',todayDone:'Tehty tänään',
    habits:'Tavat',fitness:'Kuntoilu',stats:'Tilastot',habitsToday:'Tämän päivän tavat',newBtn:'Uusi',
    emptyTitle:'Ei vielä liekkiä',emptyDesc:'Luo ensimmäinen tapasi',fitTitle:'Tämän päivän treenit',logBtn:'Kirjaa',
    emptyFitTitle:'Ei vielä treenejä',emptyFitDesc:'Kirjaa ensimmäinen settisi',progress:'Edistymisesi',week:'Viimeiset 7 päivää',
    topHabits:'Vahvimmat tavat',totalFlames:'Liekit yhteensä',totalWorkouts:'Treenit',settings:'Asetukset',
    lang:'Kieli',theme:'Teema',notif:'Muistutukset',notifDesc:'Yläbanneri + ilmoitukset',security:'Turvallisuus',
    pinDesc:'PIN-lukitus',data:'Data ja varmuuskopio',export:'Vie',import:'Tuo',clear:'Tyhjennä kaikki',
    about:'Sholeh v2 — Offline ja turvallinen',habitNew:'Uusi tapa',habitName:'Nimi',icon:'Kuvake',color:'Väri',
    target:'Päivittäinen tavoite',optional:'(valinnainen)',saveHabit:'Sytytä liekki 🔥',workoutNew:'Kirjaa treeni',workoutName:'Liike',
    sets:'Setit',reps:'Toistot',duration:'Kesto (min)',notes:'Muistiinpanot',saveWorkout:'Tallenna 💪',
    lockTitle:'Sholeh lukitus',lockSub:'Syötä PIN',reminder:'Muistutus',toastDone:'Liekki syttyi! 🔥',
    toastAdded:'Uusi liekki 🔥',toastWorkout:'Treeni tallennettu 💪',toastExport:'Varmuuskopio ladattu',toastImport:'Data tuotu',
    toastClear:'Data tyhjennetty',toastPin:'PIN tallennettu',toastPinErr:'Väärä PIN',confirmClear:'Poista kaikki data?',
    confirmDel:'Poista tämä tapa?',start:'Aloita',motivation:['Tänään on se päivä ✨','Pieni liekki, iso tuli','Jokainen ruksi on edistystä','Johdonmukaisuus voittaa','Rakennat 🔥']
  }}
};

// Special unique icons set
const ICONS = ['🔥','⚡','💎','🌟','🚀','🎯','💪','🧘','📚','💧','🥗','😴','🧠','❤️','🌅','✍️','🎵','🛡️','🏆','🌱','☀️','🌙','⭐','🎨','🧩','🔑','🌈','❄️','🌊','🍃'];

// ---------- State ----------
let state = { habits: [], workouts: [], completions: {} };
let settings = { lang: 'fa', theme: 'dark', notif: true, pinEnabled: false };
let pinBuffer = '';
let currentLang = 'fa';

// ---------- Storage & Security ----------
async function hashPin(pin) {
  const enc = new TextEncoder();
  const data = enc.encode(pin + 'sholeh_salt_v2');
  const buf = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
}

function loadSettings() {
  try {
    const s = localStorage.getItem(SETTINGS_KEY);
    if (s) settings = { ...settings, ...JSON.parse(s) };
  } catch {}
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function loadState() {
  try {
    const r = localStorage.getItem(STORAGE);
    if (r) state = JSON.parse(r);
  } catch {}
}

function saveState() {
  try { localStorage.setItem(STORAGE, JSON.stringify(state)); }
  catch { toast(t('toastPinErr')); }
}

// ---------- i18n ----------
function t(key) {
  const L = LANGS[currentLang] || LANGS.en;
  return L.t[key] ?? LANGS.en.t[key] ?? key;
}

function applyLang(code) {
  currentLang = code;
  settings.lang = code;
  saveSettings();
  const L = LANGS[code] || LANGS.en;
  document.documentElement.lang = code;
  document.documentElement.dir = L.dir;

  const map = {
    'app-name': 'appName', 'app-tagline': 'tagline', 'streak-label': 'streakLabel',
    'label-active': 'active', 'label-today': 'todayDone', 'tab-habits': 'habits',
    'tab-fitness': 'fitness', 'tab-stats': 'stats', 'title-habits': 'habitsToday',
    'btn-new': 'newBtn', 'empty-habits-title': 'emptyTitle', 'empty-habits-desc': 'emptyDesc',
    'title-fitness': 'fitTitle', 'btn-log': 'logBtn', 'empty-fit-title': 'emptyFitTitle',
    'empty-fit-desc': 'emptyFitDesc', 'title-stats': 'progress', 'chart-week': 'week',
    'chart-top': 'topHabits', 'label-flames': 'totalFlames', 'label-workouts': 'totalWorkouts',
    'settings-title': 'settings', 'label-lang': 'lang', 'label-theme': 'theme',
    'label-notif': 'notif', 'notif-desc': 'notifDesc', 'label-security': 'security',
    'pin-desc': 'pinDesc', 'label-data': 'data', 'export-btn': 'export', 'import-btn': 'import',
    'clear-btn': 'clear', 'about-text': 'about', 'habit-modal-title': 'habitNew',
    'label-habit-name': 'habitName', 'label-icon': 'icon', 'label-color': 'color',
    'label-target': 'target', 'btn-save-habit': 'saveHabit', 'workout-modal-title': 'workoutNew',
    'label-workout-name': 'workoutName', 'label-sets': 'sets', 'label-reps': 'reps',
    'label-duration': 'duration', 'label-notes': 'notes', 'btn-save-workout': 'saveWorkout',
    'lock-title': 'lockTitle', 'lock-subtitle': 'lockSub', 'reminder-title': 'reminder'
  };
  Object.entries(map).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = t(key);
  });
  // optional label
  const opt = document.querySelector('#label-target .optional');
  if (opt) opt.textContent = t('optional');

  render();
  updateReminder();
}

// ---------- Helpers ----------
const today = () => new Date().toISOString().slice(0,10);
const dayOffset = n => { const d = new Date(); d.setDate(d.getDate()+n); return d.toISOString().slice(0,10); };
const faDate = iso => { try { return new Date(iso).toLocaleDateString(currentLang==='fa'?'fa-IR':currentLang, {month:'short',day:'numeric'}); } catch { return iso; } };
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2,6);

function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2400);
}

function getStreak(id) {
  let s = 0;
  for (let i = 0; i < 400; i++) {
    const key = dayOffset(-i);
    const day = state.completions[key] || {};
    const h = state.habits.find(x => x.id === id);
    const target = h?.target || 1;
    if ((day[id] || 0) >= target) s++;
    else if (i > 0) break;
    else break;
  }
  return s;
}

function bestOverall() {
  let b = 0;
  state.habits.forEach(h => { const s = getStreak(h.id); if (s > b) b = s; });
  return b;
}

// ---------- Confetti ----------
function confetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const parts = [];
  const colors = ['#f97316','#fbbf24','#ef4444','#22c55e','#8b5cf6','#06b6d4','#ec4899'];
  for (let i = 0; i < 90; i++) {
    parts.push({
      x: canvas.width/2 + (Math.random()-0.5)*120, y: canvas.height/2,
      vx: (Math.random()-0.5)*16, vy: Math.random()*-14 - 3,
      size: Math.random()*9+3, color: colors[Math.floor(Math.random()*colors.length)],
      life: 1, decay: Math.random()*0.02+0.008, rot: Math.random()*360, rotV: (Math.random()-0.5)*14
    });
  }
  function frame() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    let alive = false;
    parts.forEach(p => {
      if (p.life <= 0) return;
      alive = true;
      p.x += p.vx; p.y += p.vy; p.vy += 0.38; p.life -= p.decay; p.rot += p.rotV;
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180);
      ctx.globalAlpha = Math.max(0,p.life); ctx.fillStyle = p.color;
      ctx.fillRect(-p.size/2,-p.size/2,p.size,p.size); ctx.restore();
    });
    if (alive) requestAnimationFrame(frame);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  frame();
}

// ---------- Reminder ----------
function updateReminder() {
  const banner = document.getElementById('reminder-banner');
  if (!settings.notif) { banner.classList.add('hidden'); banner.classList.remove('show'); return; }

  const todayData = state.completions[today()] || {};
  const pending = state.habits.filter(h => (todayData[h.id]||0) < (h.target||1));
  if (pending.length === 0) {
    banner.classList.remove('show');
    setTimeout(() => banner.classList.add('hidden'), 400);
    return;
  }
  banner.classList.remove('hidden');
  const names = pending.slice(0,3).map(h => h.icon + ' ' + h.name).join(' · ');
  document.getElementById('reminder-msg').textContent =
    pending.length === 1 ? names : `${names}${pending.length > 3 ? ' ...' : ''} (${pending.length})`;
  requestAnimationFrame(() => banner.classList.add('show'));

  // Browser notification (once per session if permission granted)
  if (Notification.permission === 'granted' && !window._sholehNotified) {
    window._sholehNotified = true;
    try {
      new Notification(t('reminder'), { body: names, icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🔥</text></svg>' });
    } catch {}
  }
}

// ---------- Render ----------
function renderHero() {
  const best = bestOverall();
  document.getElementById('best-streak').textContent = best;
  const ring = document.getElementById('ring-fill');
  ring.style.strokeDashoffset = 264 - 264 * Math.min(best/30, 1);
  document.getElementById('total-habits').textContent = state.habits.length;
  const todayData = state.completions[today()] || {};
  let done = 0;
  state.habits.forEach(h => { if ((todayData[h.id]||0) >= (h.target||1)) done++; });
  document.getElementById('today-completed').textContent = done;
  const mots = t('motivation');
  document.getElementById('motivation-text').textContent =
    (done === state.habits.length && state.habits.length > 0)
      ? (currentLang==='fa' ? 'همه شعله‌ها روشنن! 🔥🔥' : 'All flames are lit! 🔥🔥')
      : mots[Math.floor(Math.random()*mots.length)];
}

function renderHabits() {
  const list = document.getElementById('habits-list');
  const empty = document.getElementById('empty-habits');
  list.innerHTML = '';
  if (!state.habits.length) { empty.style.display = 'block'; return; }
  empty.style.display = 'none';
  const todayData = state.completions[today()] || {};
  state.habits.forEach(h => {
    const count = todayData[h.id] || 0;
    const target = h.target || 1;
    const isDone = count >= target;
    const streak = getStreak(h.id);
    const card = document.createElement('div');
    card.className = 'habit-card' + (isDone ? ' done' : '');
    card.innerHTML = `
      <div class="habit-icon" style="background:${h.color}22;color:${h.color}">${h.icon}</div>
      <div class="habit-info">
        <div class="habit-name">${h.name}</div>
        <div class="habit-meta">
          ${streak > 0 ? `<span class="streak-pill">🔥 ${streak}</span>` : `<span>${t('start')}</span>`}
          ${target > 1 ? `<span>${count}/${target}</span>` : ''}
        </div>
        ${target > 1 ? `<div class="progress-track"><div class="progress-bar" style="width:${Math.min(100,(count/target)*100)}%;background:${h.color}"></div></div>` : ''}
      </div>
      <button class="check-circle ${isDone?'checked':''}" data-id="${h.id}">${isDone?'✓':''}</button>
      <button class="delete-btn" data-id="${h.id}">🗑️</button>`;
    list.appendChild(card);
  });
  list.querySelectorAll('.check-circle').forEach(b => b.onclick = () => toggle(b.dataset.id));
  list.querySelectorAll('.delete-btn').forEach(b => b.onclick = () => removeHabit(b.dataset.id));
}

function renderWorkouts() {
  const list = document.getElementById('workouts-list');
  const empty = document.getElementById('empty-workouts');
  list.innerHTML = '';
  const sorted = [...state.workouts].sort((a,b) => new Date(b.date) - new Date(a.date));
  if (!sorted.length) { empty.style.display = 'block'; return; }
  empty.style.display = 'none';
  sorted.slice(0,40).forEach(w => {
    const tags = [];
    if (w.sets) tags.push(`${w.sets} ${t('sets')}`);
    if (w.reps) tags.push(`${w.reps} ${t('reps')}`);
    if (w.duration) tags.push(`${w.duration} ${t('duration').includes('min')||t('duration').includes('دقیقه')?'min':''}`.trim());
    const card = document.createElement('div');
    card.className = 'workout-card';
    card.innerHTML = `
      <div class="workout-top"><div class="workout-name">${w.name}</div><div class="workout-date">${faDate(w.date)}</div></div>
      <div class="workout-tags">${tags.map(x=>`<span class="tag">${x}</span>`).join('')}</div>
      ${w.notes?`<div class="workout-note">${w.notes}</div>`:''}`;
    list.appendChild(card);
  });
}

function renderStats() {
  const chart = document.getElementById('week-chart');
  chart.innerHTML = '';
  const names = currentLang==='fa' ? ['ش','ی','د','س','چ','پ','ج'] : ['S','M','T','W','T','F','S'];
  for (let i=6; i>=0; i--) {
    const key = dayOffset(-i);
    const dayData = state.completions[key] || {};
    let done = 0;
    const total = Math.max(state.habits.length, 1);
    state.habits.forEach(h => { if ((dayData[h.id]||0) >= (h.target||1)) done++; });
    const h = Math.max(5, (done/total)*95);
    const col = document.createElement('div');
    col.className = 'day-col';
    const d = new Date(key);
    col.innerHTML = `<div class="day-bar" style="height:${h}px"></div><div class="day-name">${names[(d.getDay()+1)%7]}</div>`;
    chart.appendChild(col);
  }
  const topEl = document.getElementById('top-habits');
  topEl.innerHTML = '';
  const counts = {};
  Object.values(state.completions).forEach(day => Object.entries(day).forEach(([id,c]) => counts[id]=(counts[id]||0)+c));
  const ranked = Object.entries(counts).map(([id,c])=>({h:state.habits.find(x=>x.id===id),c})).filter(x=>x.h).sort((a,b)=>b.c-a.c).slice(0,5);
  if (!ranked.length) topEl.innerHTML = `<p style="color:var(--muted);text-align:center;font-size:0.85rem">—</p>`;
  else {
    const max = ranked[0].c || 1;
    ranked.forEach(item => {
      const row = document.createElement('div');
      row.className = 'top-row';
      row.innerHTML = `<span style="font-size:1.15rem">${item.h.icon}</span>
        <span style="width:68px;font-size:0.78rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:600">${item.h.name}</span>
        <div class="top-bar-track"><div class="top-bar-fill" style="width:${(item.c/max)*100}%;background:${item.h.color}"></div></div>
        <span style="font-size:0.75rem;color:var(--muted);font-weight:700">${item.c}</span>`;
      topEl.appendChild(row);
    });
  }
  let totalC = 0;
  Object.values(state.completions).forEach(day => Object.values(day).forEach(c => totalC += c));
  document.getElementById('total-completions').textContent = totalC;
  document.getElementById('total-workouts').textContent = state.workouts.length;
}

function render() {
  renderHero();
  renderHabits();
  renderWorkouts();
  renderStats();
  updateReminder();
}

// ---------- Actions ----------
function toggle(id) {
  const key = today();
  if (!state.completions[key]) state.completions[key] = {};
  const h = state.habits.find(x => x.id === id);
  const target = h?.target || 1;
  let cur = state.completions[key][id] || 0;
  if (target > 1) { cur++; if (cur > target) cur = 0; }
  else cur = cur >= 1 ? 0 : 1;
  state.completions[key][id] = cur;
  saveState();
  render();
  if (cur >= target) {
    confetti();
    toast(t('toastDone'));
    if (navigator.vibrate) navigator.vibrate(35);
  }
}

function removeHabit(id) {
  if (!confirm(t('confirmDel'))) return;
  state.habits = state.habits.filter(h => h.id !== id);
  Object.keys(state.completions).forEach(d => delete state.completions[d][id]);
  saveState();
  render();
}

function addHabit(name, icon, color, target) {
  state.habits.push({ id: uid(), name, icon, color, target: target ? +target : 1, created: new Date().toISOString() });
  saveState();
  render();
  toast(t('toastAdded'));
}

function addWorkout(name, sets, reps, duration, notes) {
  state.workouts.push({
    id: uid(), name,
    sets: sets ? +sets : null, reps: reps ? +reps : null,
    duration: duration ? +duration : null, notes: notes || '',
    date: new Date().toISOString()
  });
  saveState();
  render();
  toast(t('toastWorkout'));
}

// ---------- PIN Lock ----------
function showLock() {
  document.getElementById('lock-screen').classList.remove('hidden');
  pinBuffer = '';
  updatePinDots();
}

function hideLock() {
  document.getElementById('lock-screen').classList.add('hidden');
}

function updatePinDots() {
  document.querySelectorAll('#pin-dots span').forEach((s,i) => {
    s.classList.toggle('filled', i < pinBuffer.length);
  });
}

async function checkPin() {
  const stored = localStorage.getItem(PIN_KEY);
  if (!stored) { hideLock(); return; }
  const hash = await hashPin(pinBuffer);
  if (hash === stored) {
    hideLock();
    document.getElementById('lock-error').textContent = '';
  } else {
    document.getElementById('lock-error').textContent = t('toastPinErr');
    pinBuffer = '';
    updatePinDots();
    if (navigator.vibrate) navigator.vibrate([40,30,40]);
  }
}

// ---------- Init UI ----------
function initIcons() {
  const grid = document.getElementById('icon-picker');
  grid.innerHTML = '';
  ICONS.forEach((ico, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'ico' + (i===0 ? ' selected' : '');
    b.dataset.icon = ico;
    b.textContent = ico;
    b.onclick = () => {
      document.querySelectorAll('.ico').forEach(o => o.classList.remove('selected'));
      b.classList.add('selected');
      window._selIcon = ico;
    };
    grid.appendChild(b);
  });
  window._selIcon = '🔥';
}

function initLangSelect() {
  const sel = document.getElementById('lang-select');
  sel.innerHTML = '';
  Object.entries(LANGS).forEach(([code, L]) => {
    const opt = document.createElement('option');
    opt.value = code;
    opt.textContent = L.name;
    if (code === currentLang) opt.selected = true;
    sel.appendChild(opt);
  });
  sel.onchange = () => applyLang(sel.value);
}

function initTheme() {
  document.querySelectorAll('.theme-opt').forEach(b => {
    b.classList.toggle('active', b.dataset.theme === settings.theme);
    b.onclick = () => {
      settings.theme = b.dataset.theme;
      saveSettings();
      if (settings.theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('theme-toggle').textContent = '☀️';
      } else {
        document.documentElement.removeAttribute('data-theme');
        document.getElementById('theme-toggle').textContent = '🌙';
      }
      document.querySelectorAll('.theme-opt').forEach(x => x.classList.toggle('active', x.dataset.theme === settings.theme));
    };
  });
}

// ---------- Boot ----------
loadSettings();
loadState();
currentLang = settings.lang || 'fa';

if (settings.theme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
  document.getElementById('theme-toggle').textContent = '☀️';
}

initIcons();
initLangSelect();
initTheme();
applyLang(currentLang);

// Tabs
document.querySelectorAll('.tab').forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab + '-tab').classList.add('active');
  };
});

// Settings
document.getElementById('settings-btn').onclick = () => {
  document.getElementById('settings-modal').classList.add('open');
  document.getElementById('notif-toggle').checked = settings.notif;
  document.getElementById('pin-toggle').checked = settings.pinEnabled;
  document.getElementById('pin-setup').classList.toggle('hidden', !settings.pinEnabled);
};
document.getElementById('close-settings').onclick = () => document.getElementById('settings-modal').classList.remove('open');

document.getElementById('notif-toggle').onchange = e => {
  settings.notif = e.target.checked;
  saveSettings();
  if (settings.notif && Notification.permission === 'default') Notification.requestPermission();
  updateReminder();
};

document.getElementById('pin-toggle').onchange = e => {
  settings.pinEnabled = e.target.checked;
  document.getElementById('pin-setup').classList.toggle('hidden', !e.target.checked);
  if (!e.target.checked) {
    localStorage.removeItem(PIN_KEY);
    settings.pinEnabled = false;
  }
  saveSettings();
};

document.getElementById('save-pin').onclick = async () => {
  const pin = document.getElementById('pin-input').value;
  if (pin.length < 4 || pin.length > 6 || !/^\d+$/.test(pin)) {
    toast(t('toastPinErr'));
    return;
  }
  const hash = await hashPin(pin);
  localStorage.setItem(PIN_KEY, hash);
  settings.pinEnabled = true;
  saveSettings();
  toast(t('toastPin'));
  document.getElementById('pin-input').value = '';
};

// Data actions
document.getElementById('export-btn').onclick = () => {
  const blob = new Blob([JSON.stringify({ state, settings }, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `sholeh-backup-${today()}.json`;
  a.click();
  toast(t('toastExport'));
};

document.getElementById('import-btn').onclick = () => document.getElementById('import-file').click();
document.getElementById('import-file').onchange = e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      if (data.state) { state = data.state; saveState(); }
      if (data.settings) { settings = { ...settings, ...data.settings }; saveSettings(); applyLang(settings.lang); }
      render();
      toast(t('toastImport'));
    } catch { toast(t('toastPinErr')); }
  };
  reader.readAsText(file);
};

document.getElementById('clear-btn').onclick = () => {
  if (!confirm(t('confirmClear'))) return;
  state = { habits: [], workouts: [], completions: {} };
  saveState();
  render();
  toast(t('toastClear'));
};

// Theme toggle header
document.getElementById('theme-toggle').onclick = () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (isLight) {
    document.documentElement.removeAttribute('data-theme');
    document.getElementById('theme-toggle').textContent = '🌙';
    settings.theme = 'dark';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById('theme-toggle').textContent = '☀️';
    settings.theme = 'light';
  }
  saveSettings();
  document.querySelectorAll('.theme-opt').forEach(x => x.classList.toggle('active', x.dataset.theme === settings.theme));
};

// Habit modal
const hModal = document.getElementById('habit-modal');
window._selIcon = '🔥';
window._selColor = '#f97316';

document.getElementById('add-habit-btn').onclick = () => {
  document.getElementById('habit-form').reset();
  window._selIcon = '🔥'; window._selColor = '#f97316';
  document.querySelectorAll('.ico').forEach(o => o.classList.remove('selected'));
  document.querySelector('.ico')?.classList.add('selected');
  document.querySelectorAll('.clr').forEach(o => o.classList.remove('selected'));
  document.querySelector('.clr[data-color="#f97316"]')?.classList.add('selected');
  hModal.classList.add('open');
};
document.getElementById('close-habit-modal').onclick = () => hModal.classList.remove('open');

document.querySelectorAll('.clr').forEach(b => {
  b.onclick = () => {
    document.querySelectorAll('.clr').forEach(o => o.classList.remove('selected'));
    b.classList.add('selected');
    window._selColor = b.dataset.color;
  };
});

document.getElementById('habit-form').onsubmit = e => {
  e.preventDefault();
  const name = document.getElementById('habit-name').value.trim();
  if (!name) return;
  addHabit(name, window._selIcon, window._selColor, document.getElementById('habit-target').value);
  hModal.classList.remove('open');
};

// Workout modal
const wModal = document.getElementById('workout-modal');
document.getElementById('add-workout-btn').onclick = () => {
  document.getElementById('workout-form').reset();
  wModal.classList.add('open');
};
document.getElementById('close-workout-modal').onclick = () => wModal.classList.remove('open');
document.getElementById('workout-form').onsubmit = e => {
  e.preventDefault();
  const name = document.getElementById('workout-name').value.trim();
  if (!name) return;
  addWorkout(name,
    document.getElementById('workout-sets').value,
    document.getElementById('workout-reps').value,
    document.getElementById('workout-duration').value,
    document.getElementById('workout-notes').value
  );
  wModal.classList.remove('open');
};

// PIN pad
document.getElementById('pin-pad').onclick = e => {
  const btn = e.target.closest('button');
  if (!btn) return;
  const n = btn.dataset.n;
  if (n === 'c') { pinBuffer = ''; updatePinDots(); document.getElementById('lock-error').textContent = ''; }
  else if (n === 'ok') checkPin();
  else if (pinBuffer.length < 6) { pinBuffer += n; updatePinDots(); if (pinBuffer.length >= 4) {/* auto optional */} }
};

// Reminder close
document.getElementById('reminder-close').onclick = () => {
  document.getElementById('reminder-banner').classList.remove('show');
};

// Backdrop
[hModal, wModal, document.getElementById('settings-modal')].forEach(m => {
  m.onclick = e => { if (e.target === m) m.classList.remove('open'); };
});

// Lock check on start
if (settings.pinEnabled && localStorage.getItem(PIN_KEY)) {
  showLock();
} else {
  hideLock();
}

// Request notification permission gently
if (settings.notif && Notification.permission === 'default') {
  setTimeout(() => Notification.requestPermission(), 3000);
}

render();
