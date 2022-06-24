using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using interview.Models;

namespace interview.Controllers
{
  [EnableCors(origins: "*", headers: "*", methods: "*")]
  public class techpannelController : ApiController
  {
    interviewtrackingEntities6 db = new interviewtrackingEntities6();

    //technical Pannel Add Data
    [HttpPost]
    [Route("api/techpannel/tecpdata")]
    public int tecpdata(techpannel m)
    {
      db.techpannels.Add(m);
      int ra = db.SaveChanges();
      if (ra > 0)
      {
        return 1;
      }
      else
      {
        return 0;
      }
    }


    //Show data for techpannel
    [HttpGet]
    [Route("api/techpannel/Getmemsdata")]
    public List<c_add_admin> Getmemsdata()
    {
      var res = from t in db.c_add_admin
                select t;
      return res.ToList();
    }

    //Show Data for Admin Pannel
    [HttpGet]
    [Route("api/techpannel/Getcrud")]
    public List<c_add_admin> Getcrud()
    {
      var res1 = from t in db.c_add_admin
                 select t;
      return res1.ToList();
    }


    //Delete Method for Admin
    [HttpDelete]
    [Route("api/techpannel/deleterec")]
    public string deleterec(int i)
    {
      try
      {
        var r = (from t in db.c_add_admin
                 where t.Candidate_id == i
                 select t).FirstOrDefault();
        db.c_add_admin.Remove(r);
        int ra2 = db.SaveChanges();
        if (ra2 > 0)
        {
          return "Deleted Successfully..!";
        }
        else
        {
          return "not deleted";
        }
      }
      catch (Exception ex)
      {
        return "You Can't Delete...Candidates is already enrolled in a Process";
      }
    }


    //Update Method for Admin
    [HttpPut]
    [Route("api/techpannel/editC")]
    public string editC(c_add_admin c)
    {
      var res = (from t in db.c_add_admin
                 where t.Candidate_id == c.Candidate_id
                 select t).FirstOrDefault();
      if (res != null)
      {
        res.candidateName = c.candidateName;
        res.pSkills = c.pSkills;
        res.sSkills = c.sSkills;
        res.experience = c.experience;
        res.qualification = c.qualification;
        res.designation = c.designation;
        res.noticeperiod = c.noticeperiod;
        res.clocation = c.clocation;

        int a = db.SaveChanges();
        if (a > 0)
        {
          return "Successfully Updated..!";
        }
        else
        {
          return "Opps...Not Updated";
        }
      }
      else
      {
        return "Try again not Updated.";
      }
    }


    //Add Data by Admin
    [HttpPost]
    [Route("api/techpannel/admAddC")]
    public string admAddC(c_add_admin c)
    {
      db.c_add_admin.Add(c);
      int ra = db.SaveChanges();

      if (ra > 0)
      {
        return "Successfully Added..!";
      }

      else
      {
        return "Opps Error..Not Added";
      }
    }

    //passing technical pannel candidate information to hr pannel
    [HttpGet]
    [Route("api/techpannel/Gettech")]
    public List<techpannel> Gettech()
    {
      var res = from t in db.techpannels
                select t;
      return res.ToList();
    }



    //hr give rating to candidate
    [HttpPost]
    [Route("api/hraccess/data")]
    public string data(schedule1 m)
    {
      db.schedule1.Add(m);
      int ra = db.SaveChanges();
      var a = (from t in db.schedule1
               where t.Candidate_id == m.Candidate_id && t.Interview_Id == m.Interview_Id
               select t).FirstOrDefault();
      var z = a.FinalStatus.ToString();
      if (z.ToString() == "True" && ra > 0)
      {

        return "SELECTED....Thanks your response submitted";

      }
      else if (z.ToString() == "False" && ra > 0)
      {
        return "REJECTED...Sorry";
      }
      else
      {
        return "respond not submitted";
      }
    }


    //for caandidate registeration
    [HttpPost]
    [Route("api/techpannel/Cregister")]
    public int Cregister(c_add_admin c)
    {
      try
      {
        db.c_add_admin.Add(c);
        int ra = db.SaveChanges();
        if (ra > 0)
        {
          return 1;
        }
        else
        {
          return 0;
        }
      }
      catch (Exception ex)
      {
        return 5;
      }
    }

    //candidate login
    [HttpPost]
    [Route("api/techpannel/Clogin")]
    public int Clogin(c_add_admin r)
    {
      var res = (from t in db.c_add_admin
                 where t.candidateName == r.candidateName && t.passwordC == r.passwordC
                 select t).Count();
      if (res > 0)
      {
        return 1;
      }
      else
      {
        return 0;
      }
    }


    //Admin View Final Status
    [HttpGet]
    [Route("api/techpannel/Getfinal")]
    public List<schedule1> Getfinal()
    {
      var res = from t in db.schedule1
                select t;
      return res.ToList();
    }



    //RescheduleDate by tech Pannel
    [HttpPut]
    [Route("api/techpannel/tReshcedule")]
    public string tReshcedule(techpannel c)
    {
      var res = (from t in db.techpannels
                 where t.Interview_Id == c.Interview_Id
                 select t).FirstOrDefault();
      if (res != null)
      {
        res.techIS = c.techIS;
        int a = db.SaveChanges();
        if (a > 0)
        {
          return "Interview Reschduled";
        }
        else
        {
          return "Oops..! Some Error";
        }
      }
      else
      {
        return "Not Updated...Please Enter Interview ID & Details";
      }
    }

    //techpannel Data for Reschedule
    [HttpGet]
    [Route("api/techpannel/GettechR")]
    public List<techpannel> GettechR()
    {
      var res = from t in db.techpannels
                select t;
      return res.ToList();
    }


    //RescheduleDate by hr Pannel
    [HttpPut]
    [Route("api/techpannel/hReshcedule")]
    public string hReshcedule(schedule1 c)
    {
      var res = (from t in db.schedule1
                 where t.Interview_Id == c.Interview_Id
                 select t).FirstOrDefault();
      if (res != null)
      {
        res.hrIS = c.hrIS;
        int a = db.SaveChanges();
        if (a > 0)
        {
          return "Interview Reschduled";
        }
        else
        {
          return "Oops..! Some Error";
        }
      }
      else
      {
        return "Try again not Updated.";
      }
    }

    //hrpannel Data for Reschedule
    [HttpGet]
    [Route("api/techpannel/GethR")]
    public List<schedule1> GethrR()
    {
      var res = from t in db.schedule1
                select t;
      return res.ToList();
    }


    [HttpGet]
    [Route("api/techpannel/GethC")]
    public List<schedule1> GethC()
    {
      var res = from t in db.schedule1
                select t;
      return res.ToList();
    }




    //candidate can view the Status
    [HttpGet]
    [Route("api/techpannel/Getview")]
    public List<schedule1> Getview()
    {
      var res = from t in db.schedule1
                select t;
      return res.ToList();
    }


    //Delete Method for tech
    [HttpDelete]
    [Route("api/techpannel/deletetech")]
    public string deletetech(int i)
    {
      try
      {
        var ra = (from t in db.c_add_admin
                  where t.Candidate_id == i
                  select t).FirstOrDefault();
        db.c_add_admin.Remove(ra);
        int ra1 = db.SaveChanges();
        if (ra1 > 0)
        {
          return "Deleted Successfully..!";
        }
        else
        {
          return "not deleted";
        }
      }
      catch (Exception ex)
      {
        return "You Can't Delete...Candidates is already enrolled in a Process";
      }
    }

    //Delete Method for hr
    [HttpDelete]
    [Route("api/techpannel/deletehr")]
    public string deletehr(int i)
    {
      try{ var ra = (from t in db.techpannels
                where t.Candidate_id == i
                select t).FirstOrDefault();
      db.techpannels.Remove(ra);
      int ra1 = db.SaveChanges();
      if (ra1 > 0)
      {
        return "Deleted Successfully..!";
      }
      else
      {
        return "not deleted";
      }

    }
    catch (Exception ex)
      {
        return "You Can't Delete...Candidates is already enrolled in a Process";
      }
}



      [HttpGet]
      [Route("api/techpannel/candidatedet")]
      public List<schedule1> candidatedet(string a)
      {
        
       var res = (from t in db.c_add_admin
                  where t.candidateName == a
                   select t).FirstOrDefault();
      
      var res2 = (from t in db.schedule1
                  where t.Candidate_id == res.Candidate_id
                  select t);

      return res2.ToList();

        
    }

  }

  
}

