/*
This file has been generated with SiteFlow (http://siteflow.witiz.com).
To remove this comment, please support us and upgrade to SiteFlow Pro.
*/
module.exports=function(s){require("load-grunt-tasks")(s);var a;s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:["source/_base.css","source/**/*.css"],dest:"animate.css"}},autoprefixer:{options:{browsers:["last 2 versions","bb 10"]},no_dest:{src:"animate.css"}},cssmin:{minify:{src:["animate.css"],dest:"animate.min.css"}},watch:{css:{files:["source/**/*","animate-config.json"],tasks:["default"]}}});a=function(){var a=s.file.readJSON("animate-config.json"),e,i,n,t=["source/_base.css"],c=0;for(e in a)if(a.hasOwnProperty(e)){i=a[e];for(n in i)if(i.hasOwnProperty(n)&&i[n]){t.push("source/"+e+"/"+n+".css");c+=1}}if(!c)s.log.writeln("No animations activated.");else s.log.writeln(c+(c>1?" animations":" animation")+" activated.");s.config("concat",{"animate.css":t});s.task.run("concat")};s.registerTask("concat-anim","Concatenates activated animations",a);s.registerTask("default",["concat-anim","autoprefixer","cssmin"]);s.registerTask("dev",["watch"])};

