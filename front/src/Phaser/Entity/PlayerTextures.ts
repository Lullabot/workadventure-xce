//The list of all the player textures, both the default models and the partial textures used for customization

export interface BodyResourceDescriptionListInterface {
    [key: string]: BodyResourceDescriptionInterface
}

export interface BodyResourceDescriptionInterface {
    name: string,
    img: string,
    level?: number
}

export const PLAYER_RESOURCES: BodyResourceDescriptionListInterface = {
    "male1": {name: "male1", img: "resources/characters/pipoya/Male 01-1.png"},
    "male2": {name: "male2", img: "resources/characters/pipoya/Male 02-2.png"},
    "male3": {name: "male3", img: "resources/characters/pipoya/Male 03-4.png"},
    "male4": {name: "male4", img: "resources/characters/pipoya/Male 09-1.png"},
    "male5": {name: "male5", img: "resources/characters/pipoya/Male 10-3.png"},
    "male6": {name: "male6", img: "resources/characters/pipoya/Male 17-2.png"},
    "male7": {name: "male7", img: "resources/characters/pipoya/Male 18-1.png"},
    "male8": {name: "male8", img: "resources/characters/pipoya/Male 16-4.png"},
    "male9": {name: "male9", img: "resources/characters/pipoya/Male 07-2.png"},
    "male10": {name: "male10", img: "resources/characters/pipoya/Male 05-3.png"},
    "male11": {name: "male11", img: "resources/characters/pipoya/Teacher male 02.png"},
    "male12": {name: "male12", img: "resources/characters/pipoya/su4 Student male 12.png"},

    "Female1": {name: "Female1", img: "resources/characters/pipoya/Female 01-1.png"},
    "Female2": {name: "Female2", img: "resources/characters/pipoya/Female 02-2.png"},
    "Female3": {name: "Female3", img: "resources/characters/pipoya/Female 03-4.png"},
    "Female4": {name: "Female4", img: "resources/characters/pipoya/Female 09-1.png"},
    "Female5": {name: "Female5", img: "resources/characters/pipoya/Female 10-3.png"},
    "Female6": {name: "Female6", img: "resources/characters/pipoya/Female 17-2.png"},
    "Female7": {name: "Female7", img: "resources/characters/pipoya/Female 18-1.png"},
    "Female8": {name: "Female8", img: "resources/characters/pipoya/Female 16-4.png"},
    "Female9": {name: "Female9", img: "resources/characters/pipoya/Female 07-2.png"},
    "Female10": {name: "Female10", img: "resources/characters/pipoya/Female 05-3.png"},
    "Female11": {name: "Female11", img: "resources/characters/pipoya/Teacher fmale 02.png"},
    "Female12": {name: "Female12", img: "resources/characters/pipoya/su4 Student fmale 12.png"},
};

export const COLOR_RESOURCES: BodyResourceDescriptionListInterface = {
    "color_1": {name: "color_1", img: "resources/customisation/character_color/character_color0.png"},
    "color_2": {name: "color_2", img: "resources/customisation/character_color/character_color1.png"},
    "color_3": {name: "color_3", img: "resources/customisation/character_color/character_color2.png"},
    "color_4": {name: "color_4", img: "resources/customisation/character_color/character_color3.png"},
    "color_5": {name: "color_5", img: "resources/customisation/character_color/character_color4.png"},
    "color_6": {name: "color_6", img: "resources/customisation/character_color/character_color5.png"},
    "color_7": {name: "color_7", img: "resources/customisation/character_color/character_color6.png"},
    "color_8": {name: "color_8", img: "resources/customisation/character_color/character_color7.png"},
    "color_9": {name: "color_9", img: "resources/customisation/character_color/character_color8.png"},
    "color_10": {name: "color_10", img: "resources/customisation/character_color/character_color9.png"},
    "color_11": {name: "color_11", img: "resources/customisation/character_color/character_color10.png"},
    "color_12": {name: "color_12", img: "resources/customisation/character_color/character_color11.png"},
    "color_13": {name: "color_13", img: "resources/customisation/character_color/character_color12.png"},
    "color_14": {name: "color_14", img: "resources/customisation/character_color/character_color13.png"},
    "color_15": {name: "color_15", img: "resources/customisation/character_color/character_color14.png"},
    "color_16": {name: "color_16", img: "resources/customisation/character_color/character_color15.png"},
    "color_17": {name: "color_17", img: "resources/customisation/character_color/character_color16.png"},
    "color_18": {name: "color_18", img: "resources/customisation/character_color/character_color17.png"},
    "color_19": {name: "color_19", img: "resources/customisation/character_color/character_color18.png"},
    "color_20": {name: "color_20", img: "resources/customisation/character_color/character_color19.png"},
    "color_21": {name: "color_21", img: "resources/customisation/character_color/character_color20.png"},
    "color_22": {name: "color_22", img: "resources/customisation/character_color/character_color21.png"},
    "color_23": {name: "color_23", img: "resources/customisation/character_color/character_color22.png"},
    "color_24": {name: "color_24", img: "resources/customisation/character_color/character_color23.png"},
    "color_25": {name: "color_25", img: "resources/customisation/character_color/character_color24.png"},
    "color_26": {name: "color_26", img: "resources/customisation/character_color/character_color25.png"},
    "color_27": {name: "color_27", img: "resources/customisation/character_color/character_color26.png"},
    "color_28": {name: "color_28", img: "resources/customisation/character_color/character_color27.png"},
    "color_29": {name: "color_29", img: "resources/customisation/character_color/character_color28.png"},
    "color_30": {name: "color_30", img: "resources/customisation/character_color/character_color29.png"},
    "color_31": {name: "color_31", img: "resources/customisation/character_color/character_color30.png"},
    "color_32": {name: "color_32", img: "resources/customisation/character_color/character_color31.png"},
    "color_33": {name: "color_33", img: "resources/customisation/character_color/character_color32.png"},
    "bodies_001": {name:"bodies_001",img: "resources/customisation/character_color/bodies_001.png"},
    "bodies_002": {name:"bodies_002",img: "resources/customisation/character_color/bodies_002.png"},
    "bodies_003": {name:"bodies_003",img: "resources/customisation/character_color/bodies_003.png"},
    "bodies_004": {name:"bodies_004",img: "resources/customisation/character_color/bodies_004.png"},
    "bodies_005": {name:"bodies_005",img: "resources/customisation/character_color/bodies_005.png"},
    "bodies_006": {name:"bodies_006",img: "resources/customisation/character_color/bodies_006.png"},
    "bodies_007": {name:"bodies_007",img: "resources/customisation/character_color/bodies_007.png"},
    "bodies_008": {name:"bodies_008",img: "resources/customisation/character_color/bodies_008.png"},
    "bodies_009": {name:"bodies_009",img: "resources/customisation/character_color/bodies_009.png"},
    "bodies_010": {name:"bodies_010",img: "resources/customisation/character_color/bodies_010.png"},
    "bodies_011": {name:"bodies_011",img: "resources/customisation/character_color/bodies_011.png"},
    "bodies_012": {name:"bodies_012",img: "resources/customisation/character_color/bodies_012.png"},
    "bodies_013": {name:"bodies_013",img: "resources/customisation/character_color/bodies_013.png"},
    "bodies_014": {name:"bodies_014",img: "resources/customisation/character_color/bodies_014.png"},
    "bodies_015": {name:"bodies_015",img: "resources/customisation/character_color/bodies_015.png"},
    "bodies_016": {name:"bodies_016",img: "resources/customisation/character_color/bodies_016.png"},
    "bodies_017": {name:"bodies_017",img: "resources/customisation/character_color/bodies_017.png"},
    "old_01": {name:"old_01",img: "resources/customisation/character_color/old_01.png"},
    "old_02": {name:"old_02",img: "resources/customisation/character_color/old_02.png"},
    "old_03": {name:"old_03",img: "resources/customisation/character_color/old_03.png"},
    "old_04": {name:"old_04",img: "resources/customisation/character_color/old_04.png"},
    "old_05": {name:"old_05",img: "resources/customisation/character_color/old_05.png"}
};

export const EYES_RESOURCES: BodyResourceDescriptionListInterface = {
    "eyes_1": {name: "eyes_1", img: "resources/customisation/character_eyes/character_eyes1.png"},
    "eyes_2": {name: "eyes_2", img: "resources/customisation/character_eyes/character_eyes2.png"},
    "eyes_3": {name: "eyes_3", img: "resources/customisation/character_eyes/character_eyes3.png"},
    "eyes_4": {name: "eyes_4", img: "resources/customisation/character_eyes/character_eyes4.png"},
    "eyes_5": {name: "eyes_5", img: "resources/customisation/character_eyes/character_eyes5.png"},
    "eyes_6": {name: "eyes_6", img: "resources/customisation/character_eyes/character_eyes6.png"},
    "eyes_7": {name: "eyes_7", img: "resources/customisation/character_eyes/character_eyes7.png"},
    "eyes_8": {name: "eyes_8", img: "resources/customisation/character_eyes/character_eyes8.png"},
    "eyes_9": {name: "eyes_9", img: "resources/customisation/character_eyes/character_eyes9.png"},
    "eyes_10": {name: "eyes_10", img: "resources/customisation/character_eyes/character_eyes10.png"},
    "eyes_11": {name: "eyes_11", img: "resources/customisation/character_eyes/character_eyes11.png"},
    "eyes_12": {name: "eyes_12", img: "resources/customisation/character_eyes/character_eyes12.png"},
    "eyes_13": {name: "eyes_13", img: "resources/customisation/character_eyes/character_eyes13.png"},
    "eyes_14": {name: "eyes_14", img: "resources/customisation/character_eyes/character_eyes14.png"},
    "eyes_15": {name: "eyes_15", img: "resources/customisation/character_eyes/character_eyes15.png"},
    "eyes_16": {name: "eyes_16", img: "resources/customisation/character_eyes/character_eyes16.png"},
    "eyes_17": {name: "eyes_17", img: "resources/customisation/character_eyes/character_eyes17.png"},
    "eyes_18": {name: "eyes_18", img: "resources/customisation/character_eyes/character_eyes18.png"},
    "eyes_19": {name: "eyes_19", img: "resources/customisation/character_eyes/character_eyes19.png"},
    "eyes_20": {name: "eyes_20", img: "resources/customisation/character_eyes/character_eyes20.png"},
    "eyes_21": {name: "eyes_21", img: "resources/customisation/character_eyes/character_eyes21.png"},
    "eyes_22": {name: "eyes_22", img: "resources/customisation/character_eyes/character_eyes22.png"},
    "eyes_23": {name: "eyes_23", img: "resources/customisation/character_eyes/character_eyes23.png"},
    "eyes_24": {name: "eyes_24", img: "resources/customisation/character_eyes/character_eyes24.png"},
    "eyes_25": {name: "eyes_25", img: "resources/customisation/character_eyes/character_eyes25.png"},
    "eyes_26": {name: "eyes_26", img: "resources/customisation/character_eyes/character_eyes26.png"},
    "eyes_27": {name: "eyes_27", img: "resources/customisation/character_eyes/character_eyes27.png"},
    "eyes_28": {name: "eyes_28", img: "resources/customisation/character_eyes/character_eyes28.png"},
    "eyes_29": {name: "eyes_29", img: "resources/customisation/character_eyes/character_eyes29.png"},
    "eyes_30": {name: "eyes_30", img: "resources/customisation/character_eyes/character_eyes30.png"}

};

export const HAIR_RESOURCES: BodyResourceDescriptionListInterface = {
    "hair_1": {name:"hair_1", img: "resources/customisation/character_hairs/character_hairs0.png"},
    "hair_2": {name:"hair_2", img: "resources/customisation/character_hairs/character_hairs1.png"},
    "hair_3": {name:"hair_3", img: "resources/customisation/character_hairs/character_hairs2.png"},
    "hair_4": {name:"hair_4", img: "resources/customisation/character_hairs/character_hairs3.png"},
    "hair_5": {name:"hair_5", img: "resources/customisation/character_hairs/character_hairs4.png"},
    "hair_6": {name:"hair_6", img: "resources/customisation/character_hairs/character_hairs5.png"},
    "hair_7": {name:"hair_7", img: "resources/customisation/character_hairs/character_hairs6.png"},
    "hair_8": {name:"hair_8", img: "resources/customisation/character_hairs/character_hairs7.png"},
    "hair_9": {name:"hair_9", img: "resources/customisation/character_hairs/character_hairs8.png"},
    "hair_10": {name:"hair_10",img: "resources/customisation/character_hairs/character_hairs9.png"},
    "hair_11": {name:"hair_11",img: "resources/customisation/character_hairs/character_hairs10.png"},
    "hair_12": {name:"hair_12",img: "resources/customisation/character_hairs/character_hairs11.png"},
    "hair_13": {name:"hair_13",img: "resources/customisation/character_hairs/character_hairs12.png"},
    "hair_14": {name:"hair_14",img: "resources/customisation/character_hairs/character_hairs13.png"},
    "hair_15": {name:"hair_15",img: "resources/customisation/character_hairs/character_hairs14.png"},
    "hair_16": {name:"hair_16",img: "resources/customisation/character_hairs/character_hairs15.png"},
    "hair_17": {name:"hair_17",img: "resources/customisation/character_hairs/character_hairs16.png"},
    "hair_18": {name:"hair_18",img: "resources/customisation/character_hairs/character_hairs17.png"},
    "hair_19": {name:"hair_19",img: "resources/customisation/character_hairs/character_hairs18.png"},
    "hair_20": {name:"hair_20",img: "resources/customisation/character_hairs/character_hairs19.png"},
    "hair_21": {name:"hair_21",img: "resources/customisation/character_hairs/character_hairs20.png"},
    "hair_22": {name:"hair_22",img: "resources/customisation/character_hairs/character_hairs21.png"},
    "hair_23": {name:"hair_23",img: "resources/customisation/character_hairs/character_hairs22.png"},
    "hair_24": {name:"hair_24",img: "resources/customisation/character_hairs/character_hairs23.png"},
    "hair_25": {name:"hair_25",img: "resources/customisation/character_hairs/character_hairs24.png"},
    "hair_26": {name:"hair_26",img: "resources/customisation/character_hairs/character_hairs25.png"},
    "hair_27": {name:"hair_27",img: "resources/customisation/character_hairs/character_hairs26.png"},
    "hair_28": {name:"hair_28",img: "resources/customisation/character_hairs/character_hairs27.png"},
    "hair_29": {name:"hair_29",img: "resources/customisation/character_hairs/character_hairs28.png"},
    "hair_30": {name:"hair_30",img: "resources/customisation/character_hairs/character_hairs29.png"},
    "hair_31": {name:"hair_31",img: "resources/customisation/character_hairs/character_hairs30.png"},
    "hair_32": {name:"hair_32",img: "resources/customisation/character_hairs/character_hairs31.png"},
    "hair_33": {name:"hair_33",img: "resources/customisation/character_hairs/character_hairs32.png"},
    "hair_34": {name:"hair_34",img: "resources/customisation/character_hairs/character_hairs33.png"},
    "hair_35": {name:"hair_35",img: "resources/customisation/character_hairs/character_hairs34.png"},
    "hair_36": {name:"hair_36",img: "resources/customisation/character_hairs/character_hairs35.png"},
    "hair_37": {name:"hair_37",img: "resources/customisation/character_hairs/character_hairs36.png"},
    "hair_38": {name:"hair_38",img: "resources/customisation/character_hairs/character_hairs37.png"},
    "hair_39": {name:"hair_39",img: "resources/customisation/character_hairs/character_hairs38.png"},
    "hair_40": {name:"hair_40",img: "resources/customisation/character_hairs/character_hairs39.png"},
    "hair_41": {name:"hair_41",img: "resources/customisation/character_hairs/character_hairs40.png"},
    "hair_42": {name:"hair_42",img: "resources/customisation/character_hairs/character_hairs41.png"},
    "hair_43": {name:"hair_43",img: "resources/customisation/character_hairs/character_hairs42.png"},
    "hair_44": {name:"hair_44",img: "resources/customisation/character_hairs/character_hairs43.png"},
    "hair_45": {name:"hair_45",img: "resources/customisation/character_hairs/character_hairs44.png"},
    "hair_46": {name:"hair_46",img: "resources/customisation/character_hairs/character_hairs45.png"},
    "hair_47": {name:"hair_47",img: "resources/customisation/character_hairs/character_hairs46.png"},
    "hair_48": {name:"hair_48",img: "resources/customisation/character_hairs/character_hairs47.png"},
    "hair_49": {name:"hair_49",img: "resources/customisation/character_hairs/character_hairs48.png"},
    "hair_50": {name:"hair_50",img: "resources/customisation/character_hairs/character_hairs49.png"},
    "hair_51": {name:"hair_51",img: "resources/customisation/character_hairs/character_hairs50.png"},
    "hair_52": {name:"hair_52",img: "resources/customisation/character_hairs/character_hairs51.png"},
    "hair_53": {name:"hair_53",img: "resources/customisation/character_hairs/character_hairs52.png"},
    "hair_54": {name:"hair_54",img: "resources/customisation/character_hairs/character_hairs53.png"},
    "hair_55": {name:"hair_55",img: "resources/customisation/character_hairs/character_hairs54.png"},
    "hair_56": {name:"hair_56",img: "resources/customisation/character_hairs/character_hairs55.png"},
    "hair_57": {name:"hair_57",img: "resources/customisation/character_hairs/character_hairs56.png"},
    "hair_58": {name:"hair_58",img: "resources/customisation/character_hairs/character_hairs57.png"},
    "hair_59": {name:"hair_59",img: "resources/customisation/character_hairs/character_hairs58.png"},
    "hair_60": {name:"hair_60",img: "resources/customisation/character_hairs/character_hairs59.png"},
    "hair_61": {name:"hair_61",img: "resources/customisation/character_hairs/character_hairs60.png"},
    "hair_62": {name:"hair_62",img: "resources/customisation/character_hairs/character_hairs61.png"},
    "hair_63": {name:"hair_63",img: "resources/customisation/character_hairs/character_hairs62.png"},
    "hair_64": {name:"hair_64",img: "resources/customisation/character_hairs/character_hairs63.png"},
    "hair_65": {name:"hair_65",img: "resources/customisation/character_hairs/character_hairs64.png"},
    "hair_66": {name:"hair_66",img: "resources/customisation/character_hairs/character_hairs65.png"},
    "hair_67": {name:"hair_67",img: "resources/customisation/character_hairs/character_hairs66.png"},
    "hair_68": {name:"hair_68",img: "resources/customisation/character_hairs/character_hairs67.png"},
    "hair_69": {name:"hair_69",img: "resources/customisation/character_hairs/character_hairs68.png"},
    "hair_70": {name:"hair_70",img: "resources/customisation/character_hairs/character_hairs69.png"},
    "hair_71": {name:"hair_71",img: "resources/customisation/character_hairs/character_hairs70.png"},
    "hair_72": {name:"hair_72",img: "resources/customisation/character_hairs/character_hairs71.png"},
    "hair_73": {name:"hair_73",img: "resources/customisation/character_hairs/character_hairs72.png"},
    "hair_74": {name:"hair_74",img: "resources/customisation/character_hairs/character_hairs73.png"}
};


export const CLOTHES_RESOURCES: BodyResourceDescriptionListInterface = {
    "clothes_0": {name:"clothes_0", img: "resources/customisation/character_clothes/naked.png"},
    "clothes_1": {name:"clothes_1", img: "resources/customisation/character_clothes/character_clothes0.png"},
    "clothes_2": {name:"clothes_2", img: "resources/customisation/character_clothes/character_clothes1.png"},
    "clothes_3": {name:"clothes_3", img: "resources/customisation/character_clothes/character_clothes2.png"},
    "clothes_4": {name:"clothes_4", img: "resources/customisation/character_clothes/character_clothes3.png"},
    "clothes_5": {name:"clothes_5", img: "resources/customisation/character_clothes/character_clothes4.png"},
    "clothes_6": {name:"clothes_6", img: "resources/customisation/character_clothes/character_clothes5.png"},
    "clothes_7": {name:"clothes_7", img: "resources/customisation/character_clothes/character_clothes6.png"},
    "clothes_8": {name:"clothes_8", img: "resources/customisation/character_clothes/character_clothes7.png"},
    "clothes_9": {name:"clothes_9", img: "resources/customisation/character_clothes/character_clothes8.png"},
    "clothes_10": {name:"clothes_10",img: "resources/customisation/character_clothes/character_clothes9.png"},
    "clothes_11": {name:"clothes_11",img: "resources/customisation/character_clothes/character_clothes10.png"},
    "clothes_12": {name:"clothes_12",img: "resources/customisation/character_clothes/character_clothes11.png"},
    "clothes_13": {name:"clothes_13",img: "resources/customisation/character_clothes/character_clothes12.png"},
    "clothes_14": {name:"clothes_14",img: "resources/customisation/character_clothes/character_clothes13.png"},
    "clothes_15": {name:"clothes_15",img: "resources/customisation/character_clothes/character_clothes14.png"},
    "clothes_16": {name:"clothes_16",img: "resources/customisation/character_clothes/character_clothes15.png"},
    "clothes_17": {name:"clothes_17",img: "resources/customisation/character_clothes/character_clothes16.png"},
    "clothes_18": {name:"clothes_18",img: "resources/customisation/character_clothes/character_clothes17.png"},
    "clothes_19": {name:"clothes_19",img: "resources/customisation/character_clothes/character_clothes18.png"},
    "clothes_20": {name:"clothes_20",img: "resources/customisation/character_clothes/character_clothes19.png"},
    "clothes_21": {name:"clothes_21",img: "resources/customisation/character_clothes/character_clothes20.png"},
    "clothes_22": {name:"clothes_22",img: "resources/customisation/character_clothes/character_clothes21.png"},
    "clothes_23": {name:"clothes_23",img: "resources/customisation/character_clothes/character_clothes22.png"},
    "clothes_24": {name:"clothes_24",img: "resources/customisation/character_clothes/character_clothes23.png"},
    "clothes_25": {name:"clothes_25",img: "resources/customisation/character_clothes/character_clothes24.png"},
    "clothes_26": {name:"clothes_26",img: "resources/customisation/character_clothes/character_clothes25.png"},
    "clothes_27": {name:"clothes_27",img: "resources/customisation/character_clothes/character_clothes26.png"},
    "clothes_28": {name:"clothes_28",img: "resources/customisation/character_clothes/character_clothes27.png"},
    "clothes_29": {name:"clothes_29",img: "resources/customisation/character_clothes/character_clothes28.png"},
    "clothes_30": {name:"clothes_30",img: "resources/customisation/character_clothes/character_clothes29.png"},
    "clothes_31": {name:"clothes_31",img: "resources/customisation/character_clothes/character_clothes30.png"},
    "clothes_32": {name:"clothes_32",img: "resources/customisation/character_clothes/character_clothes31.png"},
    "clothes_33": {name:"clothes_33",img: "resources/customisation/character_clothes/character_clothes32.png"},
    "clothes_34": {name:"clothes_34",img: "resources/customisation/character_clothes/character_clothes33.png"},
    "clothes_35": {name:"clothes_35",img: "resources/customisation/character_clothes/character_clothes34.png"},
    "clothes_36": {name:"clothes_36",img: "resources/customisation/character_clothes/character_clothes35.png"},
    "clothes_37": {name:"clothes_37",img: "resources/customisation/character_clothes/character_clothes36.png"},
    "clothes_38": {name:"clothes_38",img: "resources/customisation/character_clothes/character_clothes37.png"},
    "clothes_39": {name:"clothes_39",img: "resources/customisation/character_clothes/character_clothes38.png"},
    "clothes_40": {name:"clothes_40",img: "resources/customisation/character_clothes/character_clothes39.png"},
    "clothes_41": {name:"clothes_41",img: "resources/customisation/character_clothes/character_clothes40.png"},
    "clothes_42": {name:"clothes_42",img: "resources/customisation/character_clothes/character_clothes41.png"},
    "clothes_43": {name:"clothes_43",img: "resources/customisation/character_clothes/character_clothes42.png"},
    "clothes_44": {name:"clothes_44",img: "resources/customisation/character_clothes/character_clothes43.png"},
    "clothes_45": {name:"clothes_45",img: "resources/customisation/character_clothes/character_clothes44.png"},
    "clothes_46": {name:"clothes_46",img: "resources/customisation/character_clothes/character_clothes45.png"},
    "clothes_47": {name:"clothes_47",img: "resources/customisation/character_clothes/character_clothes46.png"},
    "clothes_48": {name:"clothes_48",img: "resources/customisation/character_clothes/character_clothes47.png"},
    "clothes_49": {name:"clothes_49",img: "resources/customisation/character_clothes/character_clothes48.png"},
    "clothes_50": {name:"clothes_50",img: "resources/customisation/character_clothes/character_clothes49.png"},
    "clothes_51": {name:"clothes_51",img: "resources/customisation/character_clothes/character_clothes50.png"},
    "clothes_52": {name:"clothes_52",img: "resources/customisation/character_clothes/character_clothes51.png"},
    "clothes_53": {name:"clothes_53",img: "resources/customisation/character_clothes/character_clothes52.png"},
    "clothes_54": {name:"clothes_54",img: "resources/customisation/character_clothes/character_clothes53.png"},
    "clothes_55": {name:"clothes_55",img: "resources/customisation/character_clothes/character_clothes54.png"},
    "clothes_56": {name:"clothes_56",img: "resources/customisation/character_clothes/character_clothes55.png"},
    "clothes_57": {name:"clothes_57",img: "resources/customisation/character_clothes/character_clothes56.png"},
    "clothes_58": {name:"clothes_58",img: "resources/customisation/character_clothes/character_clothes57.png"},
    "clothes_59": {name:"clothes_59",img: "resources/customisation/character_clothes/character_clothes58.png"},
    "clothes_60": {name:"clothes_60",img: "resources/customisation/character_clothes/character_clothes59.png"},
    "clothes_61": {name:"clothes_61",img: "resources/customisation/character_clothes/character_clothes60.png"},
    "clothes_62": {name:"clothes_62",img: "resources/customisation/character_clothes/character_clothes61.png"},
    "clothes_63": {name:"clothes_63",img: "resources/customisation/character_clothes/character_clothes62.png"},
    "clothes_64": {name:"clothes_64",img: "resources/customisation/character_clothes/character_clothes63.png"},
    "clothes_65": {name:"clothes_65",img: "resources/customisation/character_clothes/character_clothes64.png"},
    "clothes_66": {name:"clothes_66",img: "resources/customisation/character_clothes/character_clothes65.png"},
    "clothes_67": {name:"clothes_67",img: "resources/customisation/character_clothes/character_clothes66.png"},
    "clothes_68": {name:"clothes_68",img: "resources/customisation/character_clothes/character_clothes67.png"},
    "clothes_69": {name:"clothes_69",img: "resources/customisation/character_clothes/character_clothes68.png"},
    "clothes_70": {name:"clothes_70",img: "resources/customisation/character_clothes/character_clothes69.png"},
    "clothes_red_stripes": {name:"clothes_red_stripes",img: "resources/customisation/character_clothes/red_stripes.png"},
    "clothes_pride_shirt": {name:"clothes_pride_shirt",img: "resources/customisation/character_clothes/pride_shirt.png"},
    "clothes_black_hoodie": {name:"clothes_black_hoodie",img: "resources/customisation/character_clothes/black_hoodie.png"},
    "clothes_white_hoodie": {name:"clothes_white_hoodie",img: "resources/customisation/character_clothes/white_hoodie.png"},
    "clothes_engelbert": {name:"clothes_engelbert",img: "resources/customisation/character_clothes/engelbert.png"},
    "clothes_vest_yellow": {name:"clothes_vest_yellow",img: "resources/customisation/character_clothes/vest_yellow.png"},
    "clothes_vest_orange": {name:"clothes_vest_orange",img: "resources/customisation/character_clothes/vest_orange.png"},
    "clothes_vest_red": {name:"clothes_vest_red",img: "resources/customisation/character_clothes/vest_red.png"},
    "clothes_vest_purple": {name:"clothes_vest_purple",img: "resources/customisation/character_clothes/vest_purple.png"},
    "clothes_vest_blue": {name:"clothes_vest_blue",img: "resources/customisation/character_clothes/vest_blue.png"},
    "clothes_vest_green": {name:"clothes_vest_green",img: "resources/customisation/character_clothes/vest_green.png"}
};

export const HATS_RESOURCES: BodyResourceDescriptionListInterface = {
    "hats_1": {name: "hats_1", img: "resources/customisation/character_hats/character_hats1.png"},
    "hats_2": {name: "hats_2", img: "resources/customisation/character_hats/character_hats2.png"},
    "hats_3": {name: "hats_3", img: "resources/customisation/character_hats/character_hats3.png"},
    "hats_4": {name: "hats_4", img: "resources/customisation/character_hats/character_hats4.png"},
    "hats_5": {name: "hats_5", img: "resources/customisation/character_hats/character_hats5.png"},
    "hats_6": {name: "hats_6", img: "resources/customisation/character_hats/character_hats6.png"},
    "hats_7": {name: "hats_7", img: "resources/customisation/character_hats/character_hats7.png"},
    "hats_8": {name: "hats_8", img: "resources/customisation/character_hats/character_hats8.png"},
    "hats_9": {name: "hats_9", img: "resources/customisation/character_hats/character_hats9.png"},
    "hats_10": {name: "hats_10", img: "resources/customisation/character_hats/character_hats10.png"},
    "hats_11": {name: "hats_11", img: "resources/customisation/character_hats/character_hats11.png"},
    "hats_12": {name: "hats_12", img: "resources/customisation/character_hats/character_hats12.png"},
    "hats_13": {name: "hats_13", img: "resources/customisation/character_hats/character_hats13.png"},
    "hats_14": {name: "hats_14", img: "resources/customisation/character_hats/character_hats14.png"},
    "hats_15": {name: "hats_15", img: "resources/customisation/character_hats/character_hats15.png"},
    "hats_16": {name: "hats_16", img: "resources/customisation/character_hats/character_hats16.png"},
    "hats_17": {name: "hats_17", img: "resources/customisation/character_hats/character_hats17.png"},
    "hats_18": {name: "hats_18", img: "resources/customisation/character_hats/character_hats18.png"},
    "hats_19": {name: "hats_19", img: "resources/customisation/character_hats/character_hats19.png"},
    "hats_20": {name: "hats_20", img: "resources/customisation/character_hats/character_hats20.png"},
    "hats_21": {name: "hats_21", img: "resources/customisation/character_hats/character_hats21.png"},
    "hats_22": {name: "hats_22", img: "resources/customisation/character_hats/character_hats22.png"},
    "hats_23": {name: "hats_23", img: "resources/customisation/character_hats/character_hats23.png"},
    "hats_24": {name: "hats_24", img: "resources/customisation/character_hats/character_hats24.png"},
    "hats_25": {name: "hats_25", img: "resources/customisation/character_hats/character_hats25.png"},
    "hats_26": {name: "hats_26", img: "resources/customisation/character_hats/character_hats26.png"},
    "tinfoil_hat1": {name: "tinfoil_hat1", img: "resources/customisation/character_hats/tinfoil_hat1.png"},
    "purple_hat": {name: "purple_hat", img: "resources/customisation/character_hats/purple_hat.png"},
    "diving_mask1": {name: "diving_mask1", img: "resources/customisation/character_hats/diving_mask1.png"},
    "accessory_mask": {name: "accessory_mask", img: "resources/customisation/character_accessories/mask.png"},
    "sign-dont-talk": {name: "sign-dont-talk", img: "resources/customisation/character_accessories/sign-dont-talk.png"},
    "sign-talk": {name: "sign-talk", img: "resources/customisation/character_accessories/sign-talk.png"}
};

export const ACCESSORIES_RESOURCES: BodyResourceDescriptionListInterface = {
    "accessory_1": {name: "accessory_1", img: "resources/customisation/character_accessories/character_accessories1.png"},
    //"accessory_2": {name: "accessory_2", img: "resources/customisation/character_accessories/character_accessories2.png"},
    //"accessory_3": {name: "accessory_3", img: "resources/customisation/character_accessories/character_accessories3.png"},
    //"accessory_4": {name: "accessory_4", img: "resources/customisation/character_accessories/character_accessories4.png"},
    //"accessory_5": {name: "accessory_5", img: "resources/customisation/character_accessories/character_accessories5.png"},
    //"accessory_6": {name: "accessory_6", img: "resources/customisation/character_accessories/character_accessories6.png"},
    //"accessory_7": {name: "accessory_7", img: "resources/customisation/character_accessories/character_accessories7.png"},
    //"accessory_8": {name: "accessory_8", img: "resources/customisation/character_accessories/character_accessories8.png"},
    //"accessory_9": {name: "accessory_9", img: "resources/customisation/character_accessories/character_accessories9.png"},
    //"accessory_10": {name: "accessory_10", img: "resources/customisation/character_accessories/character_accessories10.png"},
    //"accessory_11": {name: "accessory_11", img: "resources/customisation/character_accessories/character_accessories11.png"},
    //"accessory_12": {name: "accessory_12", img: "resources/customisation/character_accessories/character_accessories12.png"},
    //"accessory_13": {name: "accessory_13", img: "resources/customisation/character_accessories/character_accessories13.png"},
    //"accessory_14": {name: "accessory_14", img: "resources/customisation/character_accessories/character_accessories14.png"},
    //"accessory_15": {name: "accessory_15", img: "resources/customisation/character_accessories/character_accessories15.png"},
    //"accessory_16": {name: "accessory_16", img: "resources/customisation/character_accessories/character_accessories16.png"},
    //"accessory_17": {name: "accessory_17", img: "resources/customisation/character_accessories/character_accessories17.png"},
    //"accessory_18": {name: "accessory_18", img: "resources/customisation/character_accessories/character_accessories18.png"},
    //"accessory_19": {name: "accessory_19", img: "resources/customisation/character_accessories/character_accessories19.png"},
    //"accessory_20": {name: "accessory_20", img: "resources/customisation/character_accessories/character_accessories20.png"},
    //"accessory_21": {name: "accessory_21", img: "resources/customisation/character_accessories/character_accessories21.png"},
    "accessory_22": {name: "accessory_22", img: "resources/customisation/character_accessories/character_accessories22.png"},
    "accessory_23": {name: "accessory_23", img: "resources/customisation/character_accessories/character_accessories23.png"},
    "accessory_24": {name: "accessory_24", img: "resources/customisation/character_accessories/character_accessories24.png"},
    "accessory_25": {name: "accessory_25", img: "resources/customisation/character_accessories/character_accessories25.png"},
    //"accessory_26": {name: "accessory_26", img: "resources/customisation/character_accessories/character_accessories26.png"},
    //"accessory_27": {name: "accessory_27", img: "resources/customisation/character_accessories/character_accessories27.png"},
    //"accessory_28": {name: "accessory_28", img: "resources/customisation/character_accessories/character_accessories28.png"},
    //"accessory_29": {name: "accessory_29", img: "resources/customisation/character_accessories/character_accessories29.png"},
    //"accessory_30": {name: "accessory_30", img: "resources/customisation/character_accessories/character_accessories30.png"},
    //"accessory_31": {name: "accessory_31", img: "resources/customisation/character_accessories/character_accessories31.png"},
    //"accessory_32": {name: "accessory_32", img: "resources/customisation/character_accessories/character_accessories32.png"},
    "accessory_mate_bottle": {name: "accessory_mate_bottle", img: "resources/customisation/character_accessories/mate_bottle1.png"},
    "accessory_mask": {name: "accessory_mask", img: "resources/customisation/character_accessories/mask.png"},
    "accessory_wings_01": {name: "accessory_wings_01", img: "resources/customisation/character_accessories/wings_01.png"},
    "accessory_wings_02": {name: "accessory_wings_02", img: "resources/customisation/character_accessories/wings_02.png"},
    "accessory_wheelchair": {name: "accessory_wheelchair", img: "resources/customisation/character_accessories/wheelchair.png"},
    "accessory_backpack": {name: "accessory_backpack", img: "resources/customisation/character_accessories/backpack.png"},
    "accessory_ring": {name: "accessory_ring", img: "resources/customisation/character_accessories/ring.png"},
    "accessory_sign-dont-talk": {name: "accessory_sign-dont-talk", img: "resources/customisation/character_accessories/sign-dont-talk.png"},
    "accessory_sign_talk": {name: "accessory_sign-talk", img: "resources/customisation/character_accessories/sign-talk.png"}
};

export const LAYERS: BodyResourceDescriptionListInterface[] = [
    COLOR_RESOURCES,
    EYES_RESOURCES,
    HAIR_RESOURCES,
    CLOTHES_RESOURCES,
    HATS_RESOURCES,
    ACCESSORIES_RESOURCES
];

export const OBJECTS: BodyResourceDescriptionInterface[] = [
    {name:'teleportation', img:'resources/objects/teleportation.png'},
];
